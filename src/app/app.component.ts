import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './template/header/header.component';
import { NavbarComponent } from './template/navbar/navbar.component';
import { MainComponent } from './template/main/main.component';
import { FooterComponent } from './template/footer/footer.component';
import { ProjectsComponent } from './template/projects/projects.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, NavbarComponent, MainComponent, ProjectsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Vincent portfolio';
}
