import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { publicApiFunction } from '@crewsync/utility'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'user';

  constructor(){
    publicApiFunction()
  }
}
