import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl = "";

  constructor(private router: Router) {
      router.events.subscribe(
        (url:any) => {
          this.currentUrl = url.url ? url.url.replace("/",""):this.currentUrl;
      });
  }

  ngOnInit(): void {
  }

}
