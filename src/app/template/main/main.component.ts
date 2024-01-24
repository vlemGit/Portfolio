import { Component } from '@angular/core';
import { CardPresentationComponent } from './card-presentation/card-presentation.component';
import { TextPresentationComponent } from './text-presentation/text-presentation.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CardPresentationComponent, TextPresentationComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {

}
