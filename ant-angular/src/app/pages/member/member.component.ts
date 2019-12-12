import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  membername = '홍길순';
  selectedValue = 'first';
  startdate = '2019-12-12';
  enddate = '2020-01-21';
  startdateTime = new Date(this.startdate).getTime();
  enddateTime = new Date(this.enddate).getTime();
  varifydateTime = this.enddateTime - this.startdateTime;
  varifydate = this.varifydateTime / 86400000;
  checkdate = new Date(Date.now());
  beforeBreakfastWeight: number;
  afterBreakfastWeight: number;
  beforeSleepWeight: number;

  constructor() {}
  // disabled = false;
  // value1 = 30;
  // value2 = [20, 50];
  // selectedValue = 0;

  ngOnInit() {}
  // size = 'small';
}
