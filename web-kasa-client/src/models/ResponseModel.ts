export interface ResponseModel<T> {
  isSuccess: boolean;
  value: T | null;
}
