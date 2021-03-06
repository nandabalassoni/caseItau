import { Component, OnInit } from '@angular/core';
import { UserService } from './../user.service';
import { User } from '../user';



@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.listar();
  }

  listar() {
    this.userService.listar().subscribe(dados => this.users = dados);
  }

}