import { Component, ChangeDetectionStrategy, OnInit, inject, signal } from '@angular/core';

import { Layout } from './layout/layout';
import { Users } from './users';
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss',
  // providers: [Users]
})
export class App implements OnInit {

  count = signal(0);

  private usersService = inject(Users);

  // constructor(private usersService: Users) {

  // }

  ngOnInit(): void {
    this.usersService.settName('Waleed Adel');
  }

  // increase(): void {
  //   this.count.update(c => c + 1);
  // }
}
