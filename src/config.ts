export const baseUrl: string = process.env.NEXT_PUBLIC_API_URL ?? '';
export const baseAppUrl: string = process.env.NODE_ENV === 'production' ? process.env.NEXTAUTH_URL ?? '' : 'http://localhost:3000';

const API = {
  baseUrl
};

export default API;
