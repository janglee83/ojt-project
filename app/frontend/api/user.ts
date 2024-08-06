import request from '../utils/request';

export const login = (data: unknown) =>
  request({
    url: '/api/auth/login',
    method: 'post',
    data,
  });
