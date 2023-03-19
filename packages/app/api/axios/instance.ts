import axios, { AxiosError } from 'axios';
// import { SERVER_ADDRESS } from '../config/const';
// import { ErrorDataType } from './RTKService/types/Api.types';
// import { getStorageItem } from './localStorageService/localStorageService';
// import { authThunk } from '../redux/slices/authSlice';

const baseURL = `${'SERVER_ADDRESS'}/api`;

export const notAuthedInstance = axios.create();

export const instance = axios.create();

// instance.interceptors.request.use(
//   function (config: any) {
//     const token = getStorageItem('token');
//     (token || token === '') &&
//       (config.headers.authorization = `Token ${token}`);
//     return config;
//   },
//   function (error) {
//     return Promise.reject(error);
//   },
// );
//
// instance.interceptors.response.use(
//   (config) => config,
//   async (error: AxiosError<ErrorDataType>) => {
//     const status = error.response?.status || null;
//
//     const description_for_devs =
//       error.response?.data.description_for_devs || '';
//
//     if (description_for_devs === 'Can`t authorize via cookies') {
//       error.response
//         ? (error.response.data.description_for_users =
//             'Выполните вход на hh.ru')
//         : undefined;
//     }
//
//     const logoutCases = [
//       'Invalid authentication. Could not decode token.',
//       'Signature has expired',
//     ];
//
//     if (
//       logoutCases.includes(description_for_devs) ||
//       status === 403 ||
//       status === 401
//     ) {
//       const { store } = await import('../redux/store');
//       store.dispatch(authThunk.logout());
//     }
//     return Promise.reject(error);
//   },
// );
