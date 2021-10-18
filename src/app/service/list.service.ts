import { Injectable } from '@angular/core';
//透過Injectable聲明這是一個服務
@Injectable({
  //root表示注入到app.module.ts內
  //也可以是null 表示不設定區域  意思是你要在哪用就在哪用
  //還可以是某個模塊的名子 (一般就是懶加載模式)
  //就是 作用域設定   一般是root
  providedIn: 'root'
})
export class ListService {

  constructor() { }
  list:Array<string>=['Angular','React','Vue'];
  getList(){
    return this.list;
  }

  addList(str:string){
    this.list.push(str);
  }


}
