import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-spyon-example',
  templateUrl: './spyon-example.component.html',
  styleUrls: ['./spyon-example.component.scss']
})
export class SpyonExampleComponent implements OnInit {

  amIEligible = '';
  constructor() { }

  ngOnInit(): void {
  }

  amIEligibleForTrip(): void {
    if (this.checkValidity()) {
      this.amIEligible = 'Yes you are eligible';
    } else {
      this.amIEligible = 'No you are not eligible';
    }
  }

  checkValidity(): boolean {
    return true;
  }

}
