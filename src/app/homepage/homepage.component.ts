import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  imagesrc :string
  circleClass :string


  constructor() {
    this.imagesrc = "../../assets/images/banner.png";
    this.circleClass = "circle-default";
   }

  ngOnInit(): void {
  }

  // Changes thumbnails to images as well as background circle color
  imgSlider(imageName: string) {
    if(imageName == "neutrack") {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/neutrackFrontEndDevelopmentJPG.JPG";
      this.circleClass = "circle-neutrack";
    } else if(imageName == "square4") {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/square4FrontEndDevelopment.JPG";
      this.circleClass = "circle-square4";
    } else {
      this.imagesrc="../../assets/brandWebsiteBuilder/dev/frontendDev/bobAndWeaveVideoGame.JPG"
      this.circleClass = "circle-bobAndWeave";
    }
  }

  resetImgSlider() {
    this.imagesrc = "../../assets/images/banner.png";
  }

}
