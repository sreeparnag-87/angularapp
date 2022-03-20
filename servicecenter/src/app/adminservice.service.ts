import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
const url="http://localhost:8081"
@Injectable({
  providedIn: 'root'
})
export class AdminserviceService {
 
  
  constructor(private http:HttpClient) { }
  getdata(){
   let url1=url+"/admin/getServiceCenter";
    return this.http.get(url1);
  }

  postdata(data:any){
   let url2=url+"/admin/addServiceCenter";
   return this.http.post(url2,data);
  }

}
