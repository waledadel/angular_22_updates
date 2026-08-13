import { Component, signal, ChangeDetectionStrategy } from '@angular/core';

import { Layout } from './layout/layout';
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular_22_updates');
}
