import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./navbar/navbar.component";
import { AboutComponent } from "./about/about.component";
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TranslateModule,
    NavbarComponent, 
    AboutComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  
})
export class AppComponent {
  title = 'Leandro Reis - Portfolio';
}
