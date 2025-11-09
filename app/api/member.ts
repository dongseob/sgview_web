import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api-istrue.axcorp.ai',
  headers: {
    'Content-Type': 'application/json',
  },
});

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

export const postSignup = async (data: SignupData) => {
  return await client.post('/api/v1/member/signup', data);
};

export const postLogin = async (data: LoginData) => {
  return await client.post('/api/v1/auth/login', data);
};
