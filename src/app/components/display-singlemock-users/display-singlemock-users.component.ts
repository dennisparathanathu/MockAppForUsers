import { Component, OnInit, Inject } from '@angular/core';
import {  
  MatDialogRef,  
  MAT_DIALOG_DATA  
} from '@angular/material/dialog';  
import {MockappService} from '../../service/mockapp.service';
import {DisplayAllMockUsersComponent} from '../display-all-mock-users/display-all-mock-users.component'

@Component({
  selector: 'app-display-singlemock-users',
  templateUrl: './display-singlemock-users.component.html',
  styleUrls: ['./display-singlemock-users.component.css']
})
export class DisplaySinglemockUsersComponent implements OnInit {
    UserId: number;  
    UserName: string;  
    EmailId: string;  
    Gender: string;  
    MobileNo: string;  

  constructor(private service:MockappService,private dialogRef: MatDialogRef < DisplayAllMockUsersComponent > , @Inject(MAT_DIALOG_DATA) data) {
    this.UserId = data.userId 
   }

  ngOnInit(): void {
    this.service.getsingleuser(this.UserId).subscribe(result =>{
      console.log(result.data.userName)

      this.UserName = result.data.userName;  
      this.EmailId = result.data.email;  
      this.Gender = result.data.gender;  
      this.MobileNo = result.data.phone; 


    })
  }
  close() {  
    this.dialogRef.close();  
}  

}
