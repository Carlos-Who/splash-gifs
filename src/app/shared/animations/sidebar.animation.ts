
import { gsap } from "gsap";


export class SidebarAnimation {

  tl = gsap.timeline({paused:true, reversed: true});


  sidebarAnimation(element: any) {
    this.tl.fromTo(element, {
        xPercent: -100,
      },
      {
        xPercent: 0,
        ease: "back.inOut(1.7)",
        duration: 1
      });
    return this.tl;
  }

}
