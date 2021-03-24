import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class RepositorioService {

  reposUrl = 'https://api.github.com/users/nandabalassoni/repos';

  constructor(private http: HttpClient) { }

  listar() {
    return this.http.get<any[]>(`${this.reposUrl}`);
  }
}