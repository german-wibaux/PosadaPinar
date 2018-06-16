import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})

export class BodyComponent implements OnInit {

  imageUrls = [{ url: 'assets/img/slider6.jpg', caption: 'The first slide', href: '#config' },
  { url: 'assets/img/slider7.jpg', caption: 'The first slide', href: '#config' },
  { url: 'assets/img/slider12.jpg', caption: 'The first slide', href: '#config' },
  { url: 'assets/img/slider15.jpg', caption: 'The first slide', href: '#config' },
  { url: 'assets/img/slider16.jpg', caption: 'The first slide', href: '#config' }];
  height = '15rem';

  constructor(private router: Router) { }

  navigation = false;

  ngOnInit() {

  }

  onNavigation() {
    this.navigation = !this.navigation;
    console.log(this.navigation);
    //this.router.navigate(['/galeries']);
  }


}
