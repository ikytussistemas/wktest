import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';

const extractError = (error: HttpErrorResponse | any): string => {

  let errMsg: string;
  if (error instanceof HttpErrorResponse) {
    errMsg = `Status: ${error.status} - ${error.error.mesage}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  return errMsg;
};

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  handler(error: HttpErrorResponse | any) {
    return extractError(error);
  }
}

