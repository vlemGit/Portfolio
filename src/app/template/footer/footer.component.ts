import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {

  constructor(){ }

  ngOnInit(): void {
      this.setLocalTime();
      setInterval(() => {
        this.setLocalTime();
      }, 1000);
  }

  setLocalTime(){
    const now = new Date();
    const options = { hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
    const localTime = now.toLocaleString();
    const element = document.getElementById('localTime');
    if(element){
      element.textContent = 'Time flies : ' + localTime;
    }
  }

}
