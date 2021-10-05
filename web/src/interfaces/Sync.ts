import { AxiosPromise } from "axios";

export interface Sync<T> {
  fetch(id: number): AxiosPromise<T>;
  save(data: T): AxiosPromise<T>;
}
