import { Component,   OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{

  screen="";
  a:any;
  ope:any;
  c:any;
  d="";
  e="";

  ngOnInit(): void {

  }

  //calc

  enterValue(value:string){
    if ((this.ope=='+') || (this.ope=='-') || (this.ope=='*') || (this.ope=='/')){

      this.d = this.d + value
      this.screen = this.screen + value
      this.c = this.d
    }
    else{
      this.screen = this.screen + value;
      this.a=this.screen;
    }
  }
  condicion(value: string){
    this.screen = this.screen + value;
    this.ope = value
  }

  limpiar(){

    this.screen = "";
    this.a = "";
    this.ope = "";
    this.c = "";
    this.d = "";
  }

  resultado(){
    if (this.ope == '+'){

      this.screen = `${this.screen} = ${(parseInt(this.a) + parseInt(this.c)).toString()}; ` 
      this.screen = (parseInt(this.screen) + parseInt(this.c)).toString();
    }

    if (this.ope == '-'){

      this.screen = `${this.screen} = ${(parseInt(this.a) - parseInt(this.c)).toString()}; ` 
      this.screen = (parseInt(this.screen) - parseInt(this.c)).toString()
    }

    if (this.ope == '*'){

      this.screen = `${this.screen} = ${(parseInt(this.a) * parseInt(this.c)).toString()}; ` 
      this.screen = (parseInt(this.screen) * parseInt(this.c)).toString()
    }

    if (this.ope == '/'){

      this.screen = `${this.screen} = ${(parseInt(this.a) / parseInt(this.c)).toString()}; ` 
      this.screen = (parseInt(this.screen) / parseInt(this.c)).toString()
    }

  }
    

}
