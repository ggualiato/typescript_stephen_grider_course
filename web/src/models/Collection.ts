import axios, { AxiosResponse } from "axios";
import { UserProps } from "../interfaces/UserProps";
import { Eventing } from "./Eventing";
import { User } from "./User";

export class Collection<T, K> {
  models: T[] = [];
  events: Eventing = new Eventing();

  constructor(public rootUrl: string, public deserialize: (json: K) => T) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.rootUrl).then((resp: AxiosResponse) => {
      resp.data.forEach((value: K) => {
        this.models.push(this.deserialize(value));
      });

      this.trigger("change");
    });
  }
}
