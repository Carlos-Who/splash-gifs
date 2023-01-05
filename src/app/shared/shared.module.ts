import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    SideBarComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    FooterComponent
  ]
})
export class SharedModule { }
