import { Component, ChangeDetectionStrategy, OnInit, inject, signal, injectAsync } from '@angular/core';

import { Layout } from './layout/layout';
import { Users } from './users';
import { PDF } from './pdf';
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
  private readonly pdf = injectAsync(() => import('./pdf').then(s => s.PDF));

  // constructor(private usersService: Users) {

  // }

  ngOnInit(): void {
    this.usersService.settName('Waleed Adel');
  }

  async print(): Promise<void> {
    const pdf = await this.pdf();
    pdf.print();
  }

  // increase(): void {
  //   this.count.update(c => c + 1);
  // }
}
