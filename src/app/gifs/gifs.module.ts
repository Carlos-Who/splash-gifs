import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { GifsPageComponent } from './components/gifs-page/gifs-page.component';
import { GifsContentComponent } from './components/gifs-content/gifs-content.component';
import {SwiperModule} from "swiper/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [
    SearchBarComponent,
    GifsPageComponent,
    GifsContentComponent
  ],
  imports: [
    CommonModule,FormsModule, SwiperModule,
  ],
  exports: [
    SearchBarComponent,
    GifsPageComponent,
    GifsContentComponent
  ]
})
export class GifsModule { }
