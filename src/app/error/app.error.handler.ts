import { ErrorHandler, Inject, Injector, NgModule, InjectionToken } from '@angular/core';
import * as Rollbar from 'rollbar';
import { Router } from '@angular/router';

// tslint:disable:no-console
export class AppErrorHandler extends ErrorHandler {

  constructor(@Inject(Injector) private injector: Injector) {
    super();
  }

  handleError(error: any): void {
    this.logError(this.findOriginalError(error));
  }

  public logError(error: any): any {
    let errorLabel = (error.name) ? error.name : (error.message) ? error.message : 'Unexpected Error';
    console.group(errorLabel);
    console.error(error.name, error.message);
    console.error(error.stack);
    console.groupEnd();
  }

  // I attempt to find the underlying error in the given Wrapped error.
  findOriginalError(error: any): any {
      while (error && (error.originalError || error.error)) {
      error = (error.originalError) ? error.originalError : error.error;
    }
    return (error);
  }

  private get router(): Router {
    return this.injector.get(Router);
  }

  private get rollbar(): Rollbar {
    return this.injector.get(RollbarService);
  }
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}]
})
export class AppErrorHandlerModule {}

/**
 * Rollbar npm install rollbar --save
 * https://www.npmjs.com/package/rollbar
 * https://docs.rollbar.com/docs/angular
 **/
export const RollbarService = new InjectionToken<Rollbar>('rollbar');

export function rollbarFactory() {
  return new Rollbar({
    accessToken: 'POST_CLIENT_ITEM_TOKEN',
    captureUncaught: true,
    captureUnhandledRejections: true,
  });
}

// tslint:disable-next-line:max-classes-per-file
@NgModule({
  providers: [{provide: RollbarService, useFactory: rollbarFactory}]
})
export class RollbarServiceModule {}
