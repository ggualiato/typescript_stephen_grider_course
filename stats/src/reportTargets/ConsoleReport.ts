import { OutputTarget } from "../Summary";

export class ConsoleReport implements OutputTarget {
  constructor() {}
  print(report: string): void {
    console.log(report);
  }
}
