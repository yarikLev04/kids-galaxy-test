import axiosInstance from '@/utils/axiosInterceptors';

const login = async (login: string, password: string): Promise<string | null> => {
  const { data: accessToken } = await axiosInstance.post<string>('admin/login', { login, password });

  if (!accessToken) {
    return null;
  }

  return accessToken;
};

const updateLogin = async (login: string): Promise<string | null> => {
  const { data: accessToken } = await axiosInstance.put<string>('admin/login', { login });

  if (!accessToken) {
    return null;
  }

  return accessToken;
};

const updatePassword = async (oldPassword: string, newPassword: string, confirmPassword: string): Promise<string | null> => {
  const { data: accessToken } = await axiosInstance.put<string>('admin/password', { oldPassword, newPassword, confirmPassword });

  if (!accessToken) {
    return null;
  }

  return accessToken;
};

const authService = {
  login,
  updateLogin,
  updatePassword
};

export default authService;
