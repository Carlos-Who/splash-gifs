import {Component, ElementRef, ViewChild} from '@angular/core';
import {GifsServiceService} from "../../services/gifs-service.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent {


  @ViewChild('inputText') inputText !: ElementRef<HTMLInputElement>;
  @ViewChild('gifNumber') gifNumber !: ElementRef<HTMLSelectElement>;

  constructor(private gifService: GifsServiceService) {
  }

  seaarchInput() {
    const value = this.inputText.nativeElement.value;
    const gifNumber = this.gifNumber.nativeElement.value

    if(value.trim().length === 0) {
      return;
    }
    this.gifService.searchGifs(value, gifNumber);
    this.inputText.nativeElement.value='';
  }

}
