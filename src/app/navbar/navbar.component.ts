import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, TranslateModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  selectedLanguage = 'en';

  constructor(private translateService: TranslateService){}

  onLanguageChange() {
    const value = localStorage.getItem('');
    this.translateService.use(this.selectedLanguage)
  }
}
