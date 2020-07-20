import api from '../../services/api';

export default function AxiosDELETE(route) {
  const userId = localStorage.getItem('user');
  const language = localStorage.getItem('language');

  return api.delete(route, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${userId}`,
      'Accept-Language': language || 'pt',
    },
  });
}
