import { Component, ChangeDetectionStrategy } from '@angular/core';

import { Layout } from './layout/layout';
@Component({
  selector: 'app-root',
  imports: [Layout],
  templateUrl: './app.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.scss'
})
export class App {
}
