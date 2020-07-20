import api from '../../Services/api';

export default function AxiosGET(route) {
  const userId = localStorage.getItem('user');
  const language = localStorage.getItem('language');

  return api.get(route, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: `Bearer ${userId}`,
      'Accept-Language': language || 'pt',
    },
  });
}
