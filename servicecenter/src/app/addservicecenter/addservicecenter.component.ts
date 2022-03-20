import { Component, OnInit } from '@angular/core';
import  { FormGroup , FormControl, Validators } from '@angular/forms';
import { AdminserviceService } from '../adminservice.service';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addservicecenter',
  templateUrl: './addservicecenter.component.html',
  styleUrls: ['./addservicecenter.component.css']
})

export class AddservicecenterComponent implements OnInit {

  addcenter=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    mailid:new FormControl('',[Validators.required,Validators.email]),
    address:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')]),
    phonenumber:new FormControl('',[Validators.required,Validators.minLength(10)]),
    imageurl:new FormControl('',[Validators.required,Validators.pattern( '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]),
    description:new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z]+$')])
  })
  data:any
  mobileNumberPattern = "[0-9]{10}"
  constructor(private admin:AdminserviceService ) {
    this.admin.getdata().subscribe((data: any)=>{
      console.warn(data);
    })
  }
  
  ngOnInit(): void {
  }
  Adminsubmit(){
    console.warn();
    this.admin.postdata(this.addcenter.value)
    .subscribe((result)=>{
      console.warn(result);
    })
    
  }
  opensweetalert(){
    Swal.fire(
      'Successfully Added!',
      'You clicked the button!',
      'success'
      
    )
    
  }

}
