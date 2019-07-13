import { Component, OnInit, KeyValueDiffers } from '@angular/core';

import { Test1Service } from './../test1.service';
@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  UserInfo =[];

  constructor(private testService: Test1Service) {}
  ngOnInit() {
   this.UserInfo=this.testService.UserInfoService;
  }
  UserInfoss = [
    {
      head:"../assets/images/Banner.jpg",
      UserName: "kavisha",
      UserPicture: "../assets/images/one.jpg",
      UpdatePicture: "../assets/images/Fall.png",
      UpdateContent: "",
      UpdateTime: "10AM",
      CommentPart: [
        {
          MainName: "Nithis",
          MainPicture: "../assets/images/three.jpg",
          MainComment: "its really awsome place",
          Sub1Comment:
            [
              {
                Sub1Name: "chithu",
                Sub1Picture: "../assets/images/four.jpg",
                Sub1Comment: "its really awsome place",
                Sub2Comment:
                  [
                    {
                      sub2Name: "swathi",
                      Sub2Picture: "../assets/images/five.jpg",
                      Sub2Comment: "its really awsome place"
                    }
                  ]
              }
            ]
        },
        {
          MainName: "Abi",
          MainPicture: "../assets/images/six.jpg",
          MainComment: "its really awsome place",
        }
      ]
    },
    {
      UserName: "shakshi",
      UserPicture: "../assets/images/two.jpg",
      UpdatePicture: "",
      UpdateContent: "Kolli Hills or Kolli Malai (Tamil: கொல்லி மலை) is a small mountain range located in central Tamil Nadu and spreaded over the Namakkal district of India. The mountains rise to 1300m[1] in height and cover an area of approximately 280 km². They are part of the Eastern Ghats, which is a mountain range that runs mostly parallel to the east coast of South India. The mountain is a site of pilgrimage, because of the Arapaleeswarar temple, but the area is also popular with Motor cycle enthusiasts because of the high altitude motor-able terrain with 70 hairpin bends.",
      UpdateTime: "11PM",
      CommentPart: [
        {
          MainName: "sindhu",
          MainPicture: "../assets/images/seven.jpg",
          MainComment: "its really awsome place",
          Sub1Comment: [
            {
              Sub1Name: "rathi",
              Sub1Picture: "../assets/images/eight.jpg",
              Sub1Comment: "its really awsome place",
              Sub2Comment:
                [
                  {
                    sub2Name: "kani",
                    Sub2Picture: "../assets/images/nine.jpg",
                    Sub2Comment: "its really awsome place"
                  }
                ]
            }
          ]
        },
        {
          MainName: "Abi",
          MainPicture: "../assets/images/ten.jpg",
          MainComment: "its really awsome place",
        }
      ]
    }

  ]

}
