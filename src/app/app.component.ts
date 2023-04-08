import { Component } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
export class AppComponent {
  title = 'FichasAndDragons-site';

  constructor(private spinner: NgxSpinnerService) {}

  teste() {
    this.spinner.show();
  }
}
