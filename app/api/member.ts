import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api-istrue.axcorp.ai',
  headers: {
    'Content-Type': 'application/json',
  },
});

// 요청 인터셉터: localStorage에 accessToken이 있으면 Authorization 헤더에 추가
client.interceptors.request.use(
  (config) => {
    // 클라이언트 사이드에서만 localStorage 접근
    if (typeof window !== 'undefined') {
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
export const getMyInfo = async () => {
  return await client.get('/api/v1/auth/user/me');
};
