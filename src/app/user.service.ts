import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  usersUrl = 'https://api.github.com/users/nandabalassoni';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.usersUrl}`);
  }
}
