import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';
//這裡是關鍵，EventEmitter是來自於@angular/core 不是stream
//import { EventEmitter } from 'stream';
import { ListService } from './../service/list.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  constructor(private listService:ListService) { }

  //表示有可能接收一個title，在這個練習裡，是由HomeComponent傳過來的
  //跟POST一個概念 吧?
  @Input()
  title?:string;

  @Output()
  addList=new EventEmitter();

  addBtnFun(){
    this.addList.emit('qwe');
  }


  //最重要的是 ngOnChanges ngOnInit ngOnDestroy
  //這三項才是開發中常會用到的
  ngOnChanges(){
    console.log(this.title)

    console.log('ngOnChanges')
  }


  listForServiceDemo:Array<string>|undefined;
  ngOnInit(): void {
    this.listForServiceDemo=this.listService.getList();
    console.log('ngOnInit')

  }
  ngDoCheck(): void {
    console.log('ngDoCheck')
  }
  //ngAfterContentInit(): void {
  //  console.log('ngAfterContentInit')
  //}
  //ngAfterContentChecked(): void {
  //  console.log('ngAfterContentChecked')
  //}
  //ngAfterViewInit(): void {
  //  console.log('ngAfterViewInit')
  //}
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked')
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy')
  }
}
