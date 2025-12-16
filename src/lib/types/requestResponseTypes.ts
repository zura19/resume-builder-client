export interface ResponseSuccess<T> {
  success: true;
  data: T;
  message?: string;
}

export type PromiseResponseSuccess<T> = Promise<ResponseSuccess<T>>;

export interface ResponseError {
  success: false;
  message: string;
}

// export type Response<T> = ResponseSuccess<T> | ResponseError;
// export type ResponsePromise<T> = Promise<Response<T>>;
