import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sf-output',
  templateUrl: './sf-output.component.html',
  styleUrls: ['./sf-output.component.less']
})
export class SfOutputComponent implements OnInit {

  @Input() output: string;

  constructor() { }

  ngOnInit() {
  }

}
