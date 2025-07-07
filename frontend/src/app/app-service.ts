import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})

export class AppService {
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get(environment.API_URL); // /api/users
  }

  postData(user: any) {
    return this.http.post(environment.API_URL, user); // /api/users
  }
}
