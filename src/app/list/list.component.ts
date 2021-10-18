import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private routerInfo:ActivatedRoute) { }
  list:Array<any>=[];
  page:number=0;
  ngOnInit(): void {
    //老師的方式 捨棄  主要是寫在這也沒什麼用 Init只作動一次
    //this.page=this.routerInfo.snapshot.queryParams.page;

    axios.get('https://www.fastmock.site/mock/323354e56ef21147c3f550e18435baa1/api/getList').then(res=>{
      console.log(res);
      console.log(res.data);
      console.log(res.data['data']);
      //this.list=res.data.data
      let list:Array<any>=res.data['data'];
      for (let index=0;index<list.length;index++){
        this.list.push(list.slice(index,index+10));
        index+=9;
      }
      console.log(this.list);

    })
  }
  //老師的切頁 改寫在DoCheck裡
  ngDoCheck(): void {
    this.page=this.routerInfo.snapshot.queryParams.page;
    if(this.page==this.list.length){
      this.page=0;
    }
    console.log('~~~~!!!~',this.page);
    console.log('L:ngDoCheck')
  }
  /*ngOnChanges(){
    this.page=this.routerInfo.snapshot.queryParams.page;
    console.log("~xxx~~xx~",this.page);
  }*/

  //純切頁不帶參數的寫法
  //會跟ngDoCheck衝突 我先碼掉
  /*
  pageChange(){
    this.page+=1;
    if(this.page==this.list.length){
      this.page=0;
    }
    console.log('~~~~~',this.page);
  } */



  //ngAfterContentInit(): void {
  //  console.log('L:ngAfterContentInit')
  //}
  //ngAfterContentChecked(): void {
  //  console.log('L:ngAfterContentChecked')
  //}
  //ngAfterViewInit(): void {
  //  console.log('L:ngAfterViewInit')
  //}
  //ngAfterViewChecked(): void {
  //  console.log('L:ngAfterViewChecked')
  //}
  //ngOnDestroy(): void {
  //  console.log('L:ngOnDestroy')
  //}

}
