import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,FormBuilder,Validator, Validators } from '@angular/forms';
//要透過router取得參數的話，要import  要用Params 要加Params
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  //要透過router取得參數的話，要加入routerInfo
  constructor(private B:FormBuilder,private routerInfo:ActivatedRoute) { }

  name:string = 'Tina';
  date:Date= new Date();
  dateStr:Date= new Date();
  box:string = 'box2';
  itemClass:string = 'item-p';
  h3Dom:boolean=false;
  h3Class:string ='h3-Dom font-w string';
  isActive:boolean=true;

  isMax:boolean=false;

  colors:Array<string>  = ['red','blue','yellow','green'];

  type:number = 3;

  title:string='';

  //兩種寫法效果一樣
  //age=new FormControl('');
  age:FormControl=new FormControl('');

  loginForm:FormGroup=new FormGroup({
    userName:new FormControl(''),
    password:new FormControl(''),
  });

  formData={
    name:'',
    password:''
  };
  subBtnFun(obj:any){
    console.log(obj);
  }

  //userName 第二的陣列是內建的驗證器 必填 長短在6~18
  //password 使用了自定義的驗證器
  //phone 兩種都用
  valiDataForm:FormGroup=this.B.group({
    userName:['',[Validators.required,
                  Validators.maxLength(18),
                  Validators.minLength(6)]
            ],
    password:['',[this.passWordVal]],
    phone:['',[Validators.required,this.phoneVal]]
  });

  //object 表回傳值型態
  passWordVal(password:FormControl):object{
    const value = password.value|| '';//要碼是value不然就空字串，不是很懂
    if(!value){
      return {msg:'請輸入密碼'}
    }else{
      const valid = value.match(/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/);
      //前面{}表示 valid 有通過 回傳一個obj 不通過就是後面  三元表示
      return valid ? {}:{passwordValidator:{msg:'密碼至少須包含 數字和英文 長度6~20'}}
    }
  }

  phoneVal(phone:FormControl):object{
    const value = phone.value|| '';
    if(!value) return {msg:'請輸入手機號碼'}
    //const valid = /[0-9]{11}/.test(value);
    const valid = value.match(/^[0-9]{11}$/);

    return valid ? {}:{msg:'電話必須是11個數字'}//desc:'電話必須是11個數字'

  }
  subValiDataFormFun(){
    console.log(this.valiDataForm.get('userName'));
    console.log(this.valiDataForm.get('password'));
    console.log(this.valiDataForm.get('phone'));

  }

  ngOnInit(): void {
    console.log(this.routerInfo)

    //query 跟params可以並存

    //query比較常用，需牢記
    console.log(this.routerInfo.snapshot.queryParams)
    //params的部分長這樣
    this.routerInfo.params.subscribe((params:Params)=>{
      console.log(params)

    })

  }
  clickFun(e:Event){
    console.log(e);
    alert("點了");
  }

  inpChange(e:any){
    console.log(e.target.value);
  }

  getUserName(v:string){
    console.log(v);
  }
  ageChangeFun(){
    this.age.setValue(18);

  }

  subFormFun(){
    console.log(this.loginForm.value);

  }
}
