import { Injectable } from '@angular/core';
import {promise} from 'selenium-webdriver';
import rejected = promise.rejected;
import {reject} from 'q';

@Injectable()
export class AuthService {
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            resolve(this.loggedIn);
          }, 800
        );
      }
    );
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
