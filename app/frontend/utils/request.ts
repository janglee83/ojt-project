import axios from 'axios';
import { useLoading } from 'vue-loading-overlay';

const hideLoading = () => {
  document.querySelector('.vld-container')?.remove();
};

const token = document.head
  .querySelector('meta[name="csrf-token"]')
  ?.getAttribute('content');

const service = axios.create({
  baseURL: import.meta.env.VUE_APP_BASE_API || 'http://localhost:3000', // url = base url + request url
  timeout: 50000,
});

// Request interceptors
service.interceptors.request.use(
  config => {
    useLoading().show({
      loader: 'dots',
      color: '#00ab00',
      zIndex: 9999,
      isFullPage: false,
      container: document.getElementsByClassName('vld-parent')[0],
    });

    // Add X-Access-Token header to every request, you can add other custom headers here
    config.headers['X-Requested-With'] = 'XMLHttpRequest';
    config.headers['X-CSRF-TOKEN'] = token;

    return config;
  },
  error => {
    hideLoading();
    Promise.reject(error);
  },
);

// Response interceptors
service.interceptors.response.use(
  response => {
    const res = response.data;
    hideLoading();
    if (res.code !== 200) {
      return Promise.reject(new Error(res.message || 'Error'));
    } else {
      return response.data;
    }
  },
  error => {
    hideLoading();

    return Promise.reject(error);
  },
);

export default service;
