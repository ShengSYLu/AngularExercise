import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//要使用model 要先在這邊import
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { TestPipe } from './pipes/test.pipe';
import { HomeComponent } from './home/home.component';
import { TitleComponent } from './title/title.component';

//服務 service要自己import
import {ListService} from './service/list.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    TestPipe,
    HomeComponent,
    TitleComponent,
    ListComponent
  ],
  //然後在imports 裡加入FormsModule
  //用意是聲名組建(compoents?)有要用到的類
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  //服務 service要自己加到providers
  providers: [ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
