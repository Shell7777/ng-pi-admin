import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  @Input()
  type: string = 'success';

  @Input()
  isCloseAlert: boolean = false;
  
  isClose: boolean = false;

  constructor() { }

  ngOnInit() { }

  close() {
    this.isClose = true;
  }
}
