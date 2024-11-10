import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ValidateService {
  nh_user: string;

  getHttpOptions() {
    let access_origin = '*';
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': access_origin,
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      }),
    };
  }

  constructor(private http: HttpClient) {}

  get_url(): string {
    return environment.url_api;
  }

  user(user: String) {
    return this.http.post(
      this.get_url() + '/user/' + user + '/',
      this.getHttpOptions()
    );
  }

  getUsers(): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.get(this.get_url() + "/usuarios", httpOptions);
  }

  set_nh_user(nh_user: string) {
    console.log("entramos a set_nh_user" + nh_user)
    this.nh_user = nh_user;
  }

  get_nh_user() {
    console.log("entramos a get_nh_user" + this.nh_user)
    return this.nh_user;
  }
}
