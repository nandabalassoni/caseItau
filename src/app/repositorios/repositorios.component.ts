import { Component, OnInit } from '@angular/core';
import { RepositorioService } from './../repositorio.service';
import { Repo } from '../repo';

@Component({
  selector: 'app-repositorios',
  templateUrl: './repositorios.component.html',
  styleUrls: ['./repositorios.component.scss']
})
export class RepositoriosComponent implements OnInit {

  repos: Repo[];

  constructor(private repositorioService: RepositorioService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.repositorioService.listar().subscribe(dados => this.repos = dados);
  }

}