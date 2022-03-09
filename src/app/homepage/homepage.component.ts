import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imagesrc :string

  constructor() {
    this.imagesrc = "../../assets/images/banner.png";
   }

  ngOnInit(): void {
  }

  imgSlider(imageName: string) {
    if(imageName == "neutrack") {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/neutrackFrontEndDevelopmentJPG.JPG";
    } else if(imageName == "back2") {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/square4FrontEndDevelopment.JPG";
    } else {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/bobAndWeaveVideoGame.JPG"
    }
  }

  resetImgSlider() {
    this.imagesrc = "../../assets/images/banner.png";
  }

}
