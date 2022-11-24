import { ConsoleLogger, Injectable, Scope } from "@nestjs/common";

@Injectable({ scope: Scope.TRANSIENT})
export class MyLogger extends ConsoleLogger {
  log(message: string) {
    super.log(message)
  }
  error(message: any, stack?: string, context?: string) {
    super.error(message, stack, context)
  }
  warn(message: string) {
    super.warn(message)
  }
  debug(message: string) {
    super.debug(message)
  }
  verbose(message: string, context?: string) {
    super.verbose(message, context)
  }
}