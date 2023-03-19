import type { BaseQueryFn } from '@reduxjs/toolkit/query';
import type { AxiosError, AxiosRequestConfig } from 'axios';
import { request, RequestOptionsType } from '../axios/request';

export const axiosRequestBaseQueryFn = ({baseURL=''}:{ baseURL?: string }): BaseQueryFn<
  {
    url: string;
    method?: AxiosRequestConfig['method'];
    data?: AxiosRequestConfig['data'];
    params?: AxiosRequestConfig['params'];
    customOptions?: RequestOptionsType;
  },
  unknown,
  unknown
> =>
  async function ({ url, method, data, params, customOptions }) {
    try {
      const result = await request(
        {
          baseURL,
          url,
          method,
          data,
          params,
        },
        customOptions,
      );
      return { data: result };
    } catch (axiosError) {
      const err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };
