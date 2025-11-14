import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api-istrue.axcorp.ai',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 토큰 저장 함수 (만료 시간 포함)
export const saveTokens = (
  accessToken: string,
  refreshToken: string,
  expiresIn: number,
  refreshExpiresIn: number
) => {
  if (typeof window === 'undefined') return;

  const now = Date.now();
  const accessTokenExpiresAt = now + expiresIn * 1000; // 초를 밀리초로 변환
  const refreshTokenExpiresAt = now + refreshExpiresIn * 1000;

  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('refreshToken', refreshToken);
  localStorage.setItem('accessTokenExpiresAt', accessTokenExpiresAt.toString());
  localStorage.setItem(
    'refreshTokenExpiresAt',
    refreshTokenExpiresAt.toString()
  );
};

// 토큰 제거 함수
export const removeTokens = () => {
  if (typeof window === 'undefined') return;

  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('accessTokenExpiresAt');
  localStorage.removeItem('refreshTokenExpiresAt');
};

// 토큰 만료 체크 및 제거 함수
export const checkAndRemoveExpiredTokens = () => {
  if (typeof window === 'undefined') return;

  const accessTokenExpiresAt = localStorage.getItem('accessTokenExpiresAt');
  const refreshTokenExpiresAt = localStorage.getItem('refreshTokenExpiresAt');
  const now = Date.now();

  let shouldRemove = false;

  // 액세스 토큰 만료 체크
  if (accessTokenExpiresAt) {
    const expiresAt = parseInt(accessTokenExpiresAt, 10);
    if (now >= expiresAt) {
      shouldRemove = true;
    }
  }

  // 리프레시 토큰 만료 체크 (리프레시 토큰도 만료되면 모든 토큰 제거)
  if (refreshTokenExpiresAt) {
    const expiresAt = parseInt(refreshTokenExpiresAt, 10);
    if (now >= expiresAt) {
      shouldRemove = true;
    }
  }

  // 만료된 토큰 제거
  if (shouldRemove) {
    removeTokens();
  }
};

// 토큰 재발급 중 플래그 (동시 요청 방지)
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: string) => void;
  reject: (error?: unknown) => void;
}> = [];

// 큐에 대기 중인 요청 처리
const processQueue = (error: unknown, token: string | null = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token || undefined);
    }
  });
  failedQueue = [];
};

// 요청 인터셉터: localStorage에 accessToken이 있으면 Authorization 헤더에 추가
// 만료된 토큰은 자동으로 제거
client.interceptors.request.use(
  (config) => {
    // 클라이언트 사이드에서만 localStorage 접근
    if (typeof window !== 'undefined') {
      // 토큰 만료 체크 및 제거 (단, refresh 토큰이 있으면 제거하지 않음)
      const refreshToken = localStorage.getItem('refreshToken');
      const refreshTokenExpiresAt = localStorage.getItem(
        'refreshTokenExpiresAt'
      );
      const now = Date.now();

      // refresh 토큰이 없거나 만료된 경우에만 제거
      if (
        !refreshToken ||
        (refreshTokenExpiresAt && now >= parseInt(refreshTokenExpiresAt, 10))
      ) {
        checkAndRemoveExpiredTokens();
      } else {
        // access 토큰만 만료 체크
        const accessTokenExpiresAt = localStorage.getItem(
          'accessTokenExpiresAt'
        );
        if (accessTokenExpiresAt && now >= parseInt(accessTokenExpiresAt, 10)) {
          // access 토큰만 제거 (refresh 토큰은 유지)
          localStorage.removeItem('accessToken');
          localStorage.removeItem('accessTokenExpiresAt');
        }
      }

      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터: 401 에러 시 refresh 토큰으로 재발급
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;

    // 401 에러이고, 재시도하지 않은 요청인 경우
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        // 이미 재발급 중이면 큐에 추가
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers.Authorization = `Bearer ${token}`;
            return client(originalRequest);
          })
          .catch((err) => {
            return Promise.reject(err);
          });
      }

      originalRequest._retry = true;
      isRefreshing = true;

      // 클라이언트 사이드에서만 처리
      if (typeof window === 'undefined') {
        isRefreshing = false;
        return Promise.reject(error);
      }

      const refreshToken = localStorage.getItem('refreshToken');

      if (!refreshToken) {
        isRefreshing = false;
        processQueue(error, null);
        removeTokens();
        // 로그인/회원가입 API는 리다이렉트하지 않음
        const isAuthEndpoint =
          originalRequest.url?.includes('/auth/login') ||
          originalRequest.url?.includes('/auth/signup') ||
          originalRequest.url?.includes('/auth/find-id') ||
          originalRequest.url?.includes('/auth/reset-password');
        // 이미 로그인 페이지에 있으면 리다이렉트하지 않음
        const isOnSigninPage =
          typeof window !== 'undefined' &&
          window.location.pathname === '/signin';
        // 로그인 페이지로 리다이렉트 (인증 엔드포인트가 아니고, 이미 로그인 페이지가 아닌 경우만)
        if (
          typeof window !== 'undefined' &&
          !isAuthEndpoint &&
          !isOnSigninPage
        ) {
          window.location.href = '/signin';
        }
        return Promise.reject(error);
      }

      try {
        // refresh 토큰으로 재발급 요청
        const response = await axios.post(
          'https://api-istrue.axcorp.ai/api/v1/auth/refresh',
          {
            refresh_token: refreshToken,
          },
          {
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        const { access_token, refresh_token, expires_in, refresh_expires_in } =
          response.data;

        // 새 토큰 저장
        saveTokens(
          access_token,
          refresh_token || refreshToken, // 새 refresh 토큰이 없으면 기존 것 유지
          expires_in || 1799,
          refresh_expires_in || 604799
        );

        // 원래 요청 재시도
        originalRequest.headers.Authorization = `Bearer ${access_token}`;
        isRefreshing = false;
        processQueue(null, access_token);
        return client(originalRequest);
      } catch (refreshError) {
        // refresh 토큰 재발급 실패
        isRefreshing = false;
        processQueue(refreshError, null);
        removeTokens();
        // 로그인/회원가입 API는 리다이렉트하지 않음
        const isAuthEndpoint =
          originalRequest.url?.includes('/auth/login') ||
          originalRequest.url?.includes('/auth/signup') ||
          originalRequest.url?.includes('/auth/find-id') ||
          originalRequest.url?.includes('/auth/reset-password');
        // 이미 로그인 페이지에 있으면 리다이렉트하지 않음
        const isOnSigninPage =
          typeof window !== 'undefined' &&
          window.location.pathname === '/signin';
        // 로그인 페이지로 리다이렉트 (인증 엔드포인트가 아니고, 이미 로그인 페이지가 아닌 경우만)
        if (
          typeof window !== 'undefined' &&
          !isAuthEndpoint &&
          !isOnSigninPage
        ) {
          window.location.href = '/signin';
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

interface SignupData {
  memberType: string;
  school: string;
  grade: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  agree: {
    terms: boolean;
    privacy: boolean;
    marketing: boolean;
  };
}

interface LoginData {
  email: string;
  password: string;
}

// 회원 정보 동의 항목 타입
export interface MemberAgree {
  terms: boolean;
  privacy: boolean;
  marketing: boolean;
}

// 회원 정보 타입
export interface MemberInfo {
  id: string;
  email: string;
  name: string;
  phone: string;
  memberType: string;
  school: string;
  grade: string;
  agree: MemberAgree;
  type: string;
  is_active: boolean;
  is_email_verified: boolean;
  created_at: string;
  updated_at: string;
}

//회원가입
export const postSignup = async (data: SignupData) => {
  return await client.post('/api/v1/member/signup', data);
};

//로그인
export const postLogin = async (data: LoginData) => {
  return await client.post('/api/v1/auth/login', data);
};

//로그아웃
export const postLogout = async (accessToken: string) => {
  return await client.post('/api/v1/auth/logout', null, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
};

//회원정보 조회
export const getMyInfo = async (): Promise<{ data: MemberInfo }> => {
  return await client.get('/api/v1/auth/user/me');
};

//토큰 재발급
export const postRefreshToken = async (refreshToken: string) => {
  return await client.post('/api/v1/auth/refresh', {
    refresh_token: refreshToken,
  });
};

//아이디 찾기
export const postFindId = async (data: { name: string; phone: string }) => {
  return await client.post('/api/v1/auth/find-id', data);
};

//비밀번호 재설정
export const postResetPassword = async (data: {
  email: string;
  new_password: string;
}) => {
  return await client.post('/api/v1/auth/reset-password', data);
};
