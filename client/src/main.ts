
const MAIN_URL = 'http://localhost:4040';

export const login = async (data: any) => {
  const res = await fetch(MAIN_URL +  '/api/user/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  });
  return res;
}