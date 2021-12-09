import { Component, OnInit } from '@angular/core';

declare var Prism: any;
@Component({
  selector: 'function-overload',
  templateUrl: './tsfunc-overload.component.html',
  styleUrls: ['./tsfunc-overload.component.css']
})

export class TSFuncOverloadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      //this.code = Prism.highlight(this.code, Prism.languages[this.languageIdentifier]);
  }

}
