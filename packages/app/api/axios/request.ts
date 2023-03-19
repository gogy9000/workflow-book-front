import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { instance, notAuthedInstance } from './instance';


export type RequestOptionsType = {
  showErrorToast?: boolean;
  delayBeforeAutoClearError?:
    | 1000
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000
    | 10000
    | number;
  delayBeforeAutoHideErrorToast?:
    | 1000
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000
    | 10000
    | number;
  autoClearError?: boolean;
  autoHideErrorToast?: boolean;
  duration?:
    | 1000
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000
    | 10000
    | number;
  showSuccessToast?: boolean;
  autoHideSuccessToast?: boolean;
  delayBeforeAutoHideSuccessToast?:
    | 1000
    | 2000
    | 3000
    | 4000
    | 5000
    | 6000
    | 7000
    | 8000
    | 9000
    | 10000
    | number;
  successMessage?: string;
  notToken?: boolean;
  showIsLoading?: boolean;
};

export const request = async <RESPONSE, ERROR = any>(
  config: AxiosRequestConfig,
  {
    autoClearError = true,
    showErrorToast = true,
    delayBeforeAutoClearError = 6000,
    delayBeforeAutoHideErrorToast = 6000,
    autoHideErrorToast = true,
    duration,
    showSuccessToast = false,
    autoHideSuccessToast = true,
    delayBeforeAutoHideSuccessToast = 6000,
    successMessage = 'Ok',
    notToken = false,
    showIsLoading = true,
  }: RequestOptionsType = {
    delayBeforeAutoClearError: 6000,
    delayBeforeAutoHideErrorToast: 6000,
    showErrorToast: true,
    autoClearError: true,
    autoHideErrorToast: true,
    showSuccessToast: false,
    autoHideSuccessToast: true,
    delayBeforeAutoHideSuccessToast: 6000,
    successMessage: 'Ok',
    notToken: false,
    showIsLoading: true,
  },
) => {
  const {
    store: { dispatch },
  } = await import('../../store');

  if (duration) {
    delayBeforeAutoHideErrorToast = duration;
    delayBeforeAutoClearError = duration;
    delayBeforeAutoHideSuccessToast = duration;
  }

  // dispatch && showIsLoading && dispatch(appActions.setIsLoading(true));

  const onSuccess = (response: AxiosResponse<RESPONSE>) => {
    // if (dispatch) {
      // if (showSuccessToast) {
        // dispatch(appActions.setSuccessMessage({ message: successMessage }));
        // dispatch(appActions.setShowSuccessToast(true));

    //     setTimeout(() => {
    //       if (autoHideSuccessToast) {
    //         // dispatch(appActions.setShowSuccessToast(false));
    //         // dispatch(appActions.setSuccessMessage({ message: null }));
    //       }
    //     }, delayBeforeAutoHideSuccessToast);
    //   }
    // }
    return response.data;
  };

  const onError = (error: AxiosError<ERROR>) => {
    // if (dispatch) {
    //   // const err = error.response?.data.description_for_users || error.message;
    //
    //   dispatch(appActions.setError({ error: err }));
    //
    //   if (showErrorToast) {
    //     dispatch(appActions.setShowErrorToast(true));
    //   }
    //
    //   setTimeout(() => {
    //     if (autoClearError) {
    //       dispatch(appActions.setError({ error: null }));
    //     }
    //   }, delayBeforeAutoClearError);
    //
    //   setTimeout(() => {
    //     if (autoHideErrorToast) {
    //       dispatch(appActions.setShowErrorToast(false));
    //     }
    //   }, delayBeforeAutoHideErrorToast);
    // }

    console.log(error);
    return Promise.reject(error);
  };

  const onFinally = () => {
    // dispatch && showIsLoading && dispatch(appActions.setIsLoading(false));
  };
  if (notToken) {
    return notAuthedInstance(config)
      .then(onSuccess)
      .catch(onError)
      .finally(onFinally);
  } else {
    return instance(config).then(onSuccess).catch(onError).finally(onFinally);
  }
};
