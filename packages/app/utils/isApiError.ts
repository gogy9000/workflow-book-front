import { FetchBaseQueryError } from '@reduxjs/toolkit/query';
import { RTKQErrorType } from '../../services/RTKService/types/Api.types';

export function isFetchBaseQueryError(
  error: unknown,
): error is FetchBaseQueryError {
  return typeof error === 'object' && error != null && 'status' in error;
}
//эти предикаты нужны для того чтобы правильно типизировать ошибки из RTKQ хуков

export function isErrorWithDescription(error: unknown): error is RTKQErrorType {
  if (isFetchBaseQueryError(error)) {
    const data = error.data;
    return (
      typeof data === 'object' &&
      data != null &&
      'description_for_users' in data &&
      typeof (data as any).description_for_users === 'string'
    );
  } else {
    return false;
  }
}
