import api from '../../services/api';

export default function AxiosPOST(route, data, auth) {
  const userId = localStorage.getItem('user');
  const language = localStorage.getItem('language');

  return api.request(route, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: auth || `Bearer ${userId}`,
      'Accept-Language': language || 'pt',
    },
    data,
  });
}
