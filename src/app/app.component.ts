import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { ModifyComponent } from './components/modify/modify.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'reelcraftstudios';
}
