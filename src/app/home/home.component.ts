//service好像不用自己import

import { ListService } from './../service/list.service';
import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  //service要自己加進來
  constructor(private listService:ListService) { }

  title:string='sylu';
  //list:Array<string>|undefined;
  list:Array<string>=['zxc','asd'];

  @ViewChild('titleDom') child:any;

  listForServiceDemo:Array<string>|undefined;
  ngOnInit(): void {
    console.log(this.listService)
    this.listForServiceDemo=this.listService.getList();
    console.log('~~',this.listForServiceDemo)
  }

  /* 老師的方式 捨棄
  改寫 不捨棄 但是這部分沒有必要改
  TODO 需要知道資料陣列長度，不然page會一直往上加超怪
  */
  page:number=0;
  pageChange(){
    this.page+=1;
  }



  titleChange(){
    this.title='Tina';
  }

  addListFun(str:string){
    this.list?.push(str);
  }
  addFun(){
    this.child.addBtnFun();
  }

  addNode(){
    //這樣只會給home下的list
    //this.listForServiceDemo?.push('Node');

    this.listService.addList('Node');

  }
}
