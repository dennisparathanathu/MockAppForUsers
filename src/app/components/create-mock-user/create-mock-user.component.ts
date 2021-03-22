import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../material.module';
import {MockappService} from '../../service/mockapp.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-create-mock-user',
  templateUrl: './create-mock-user.component.html',
  styleUrls: ['./create-mock-user.component.css']
})
export class CreateMockUserComponent implements OnInit {

  user ={
    Username:'',
    Email:'',
    Phone:'',
    Age:'',
    gender:''
  };
  submitted = false;

  constructor(private service:MockappService,private route:Router) { }

  ngOnInit(): void {
  }
  addUser():void {

    const data = {
      username:this.user.Username,
      email:this.user.Email,
      phone:this.user.Phone,
      age:this.user.Age,
      gender:this.user.gender
    
    
    };
      console.log(data)

    this.service.adduser(data).subscribe(res=>{
      console.log(res);
      console.log(res.data.message)
      alert(" user added successfully");
      this.submitted = true;
      this.route.navigate['/displayallusers']
    },error =>{
      alert("request failed,plese check the details");
      console.log(error);
    });

  }


}
