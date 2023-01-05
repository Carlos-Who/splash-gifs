import {AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
// import Swiper core and required modules
import SwiperCore, {Pagination, Navigation, SwiperOptions} from "swiper";
import {GifsServiceService} from "../../services/gifs-service.service";

// install Swiper modules
SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-gifs-content',
  templateUrl: './gifs-content.component.html',
  styleUrls: ['./gifs-content.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GifsContentComponent implements OnInit {

  // @ViewChild('homeMessage') homeMessage !: ElementRef<HTMLDivElement>;
  homeMessage: boolean = true;


  constructor(private gifService: GifsServiceService) {
  }

  ngOnInit() {
    this.gifService.trendGifs();
  }

  configMobile: SwiperOptions = {
    slidesPerView : 2.2,
    spaceBetween : 8,
    loopedSlides: 2,
    loop : true,
    loopFillGroupWithBlank : true,
    pagination : {
      clickable: true
    },
    autoplay: { delay: 500 },

  }

  configTablet: SwiperOptions = {
    slidesPerView : 3.2,
    spaceBetween : 8,
    loopedSlides: 3,
    loop : true,
    loopFillGroupWithBlank : true,
    pagination : {
      clickable: true
    },
    autoplay: { delay: 500 },

  }

  configLaptopSmall: SwiperOptions = {
    slidesPerView : 4.2,
    spaceBetween : 8,
    loopedSlides: 4,
    loop : true,
    loopFillGroupWithBlank : true,
    pagination : {
      clickable: true
    },
    autoplay: { delay: 500 },

  }

  configLaptopLarge: SwiperOptions = {
    slidesPerView : 5.2,
    spaceBetween : 8,
    loopedSlides: 5,
    loop : true,
    loopFillGroupWithBlank : true,
    pagination : {
      clickable: true
    },
    autoplay: { delay: 500 },

  }



  get trending() {
    return this.gifService.gifTrendResult;
  }

  get search() {
    return this.gifService.gifResult;
  }

}
