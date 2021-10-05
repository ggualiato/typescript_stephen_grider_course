import { Callback } from "../types/Callback";

export interface ModelForView {
  on(eventName: string, callback: Callback): void;
}
