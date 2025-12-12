import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { UserRetrievalService } from '../service/user-retrieval.service';
import { User } from './userVO';

@Component({
  selector: 'app-usercomponent',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {
  users$!: Observable<User[]>;

  constructor(private userService: UserRetrievalService) {}

  ngOnInit(): void {
    this.users$ = this.userService.getUsers();
  }
}
