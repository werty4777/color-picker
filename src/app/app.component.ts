import {Component, OnInit} from '@angular/core';
import "@ui5/webcomponents-icons/dist/AllIcons.js";
import "@ui5/webcomponents-icons/dist/employee.js";
import "@ui5/webcomponents/dist/Input.js"
import {HttpClient} from "@angular/common/http";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'icons-sap';
   constructor(private http:HttpClient) {
   }
   datanombres:any[]=[];

   getNombres(){
     this.http.get("/assets/archivos.json").subscribe(value => {
       this.datanombres=value as any[];
     })
   }

  ngOnInit(): void {
    this.getNombres();
  }
  iconSelected:any="accelerated";
  fontSize:any="55px";
  color: any="#0854A0";
  fondo: any="#F0F4F8";
  seleccionarNombre(item: any) {
    console.log(item)
    this.iconSelected=item.target.value;
  }

  cambiarTama($event: any) {

    this.fontSize=$event.target.value+"px";

  }
}
