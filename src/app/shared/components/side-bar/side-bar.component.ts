import {Component, ElementRef, AfterViewInit, ViewChild} from '@angular/core';
import { SidebarAnimation } from "../../animations/sidebar.animation";
import {GifsServiceService} from "../../../gifs/services/gifs-service.service";



@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})

export class SideBarComponent implements AfterViewInit {

  menuIsOpen: boolean = false;
  animation = new SidebarAnimation();
  sideBar: any;

  @ViewChild('refSideBar', {static : true}) refSideBar !: ElementRef<HTMLElement>;

  constructor(private gifsService: GifsServiceService) { }

  ngAfterViewInit() {
    this.sideBar = this.animation.sidebarAnimation(this.refSideBar.nativeElement);
  }


  get historial() {
    return this.gifsService.historial;
  }

  buscar(gif: string) {
    this.gifsService.searchGifs(gif);
  }

  animate() {
    if(!this.menuIsOpen) {
      this.menuIsOpen = true;
      this.sideBar.play();
      return;
    }
    this.sideBar.reverse();
    this.menuIsOpen = false;
  }




}
