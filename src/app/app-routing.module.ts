import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HelloComponent } from './hello/hello.component';
import { ListComponent } from './list/list.component';

//路由配置
const routes: Routes = [
  //啥都不打 就進這裡
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'home',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:ListComponent
      }
    ]
  },
  {
    //這樣寫是params的方法，給一個參數叫id
    path:'hello/:id/:name',
    component:HelloComponent
  },
  //通配 亂打進這
  {
    path:'**',
    component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
