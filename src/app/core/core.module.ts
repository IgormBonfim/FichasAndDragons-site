import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreRoutingModule } from 'src/app/core/core-routing.module';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoreRoutingModule,
    NgxSpinnerModule
  ]
})
export class CoreModule { }
