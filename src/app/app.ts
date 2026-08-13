import { Component, ChangeDetectionStrategy, OnInit, inject } from '@angular/core';

import { Layout } from './layout/layout';
import { Users } from './users';
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private usersService = inject(Users);

  // constructor(private usersService: Users) {

  // }

  ngOnInit(): void {
    this.usersService.getName().subscribe(res => console.log(res));
  }
}
