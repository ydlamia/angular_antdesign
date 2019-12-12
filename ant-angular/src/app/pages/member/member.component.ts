import {Component, OnInit} from '@angular/core';
import {Observable, Observer} from 'rxjs';
import {NzMessageService} from 'ng-zorro-antd/message';
import {UploadFile} from 'ng-zorro-antd/upload';

interface fileInfo {
  uid: number;
  name: string;
  status: string;
  url: string;
}

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
  breakfastFood: string;
  breakfastSnack = '먹지 않음';
  breakfastTime: string;
  lunchFood: string;
  lunchSnack = '먹지 않음';
  lunchTime: string;
  dinnerFood: string;
  dinnerSnack = '먹지 않음';
  dinnerTime: string;
  loading1 = false;
  avatarUrl1: string;
  loading2 = false;
  avatarUrl2: string;
  wakeUpWeight: number;
  fileList = [];

  constructor(private msg: NzMessageService) {
    console.log('this.breakfastFood :', this.breakfastFood);
    this.breakfastFood = '밥';
    console.log('this.wakeUpWeight :', this.wakeUpWeight);
    this.wakeUpWeight = 89.6;
    this.breakfastSnack = '과자';
    console.log('this.wakeUpWeight :', this.wakeUpWeight);
  }

  showUploadList = {
    showPreviewIcon: true,
    showRemoveIcon: true,
    hidePreviewIconInNonImage: true
  };

  // fileList = [
  //   {
  //     uid: -1,
  //     name: 'xxx.png',
  //     status: 'done',
  //     url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png'
  //   }
  // ];

  previewImage: string | undefined = '';
  previewVisible = false;

  handlePreview = (file: UploadFile) => {
    this.previewImage = file.url || file.thumbUrl;
    this.previewVisible = true;
  };

  ngOnInit() {}
}
