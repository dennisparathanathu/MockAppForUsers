import { Component, OnInit } from '@angular/core';
import {MockappService} from '../../service/mockapp.service';
import {  
  MatDialog,  
  MatDialogConfig  
} from "@angular/material/dialog";  
import {DisplaySinglemockUsersComponent} from '../display-singlemock-users/display-singlemock-users.component';
import {DeleteConfirmationComponent} from '../delete-confirmation/delete-confirmation.component';
import { from } from 'rxjs';


@Component({
  selector: 'app-display-all-mock-users',
  templateUrl: './display-all-mock-users.component.html',
  styleUrls: ['./display-all-mock-users.component.css']
})
export class DisplayAllMockUsersComponent implements OnInit {

  dataSource : any
  displayedColumns = ['username', 'email', 'phone', 'age','operations'];

  constructor(private service:MockappService,private dialog: MatDialog) { }
              
  ngOnInit(): void {
    this.service.getusers().subscribe(response =>{
      console.log(response)
      this.dataSource = response;

    });
  }
  openDialog(data) {  
    const dialogConfig = new MatDialogConfig();  
    dialogConfig.disableClose = true;  
    dialogConfig.autoFocus = true;  
    dialogConfig.position = {  
        'top': '100px',  
        'left': '500px'  
    };  
    dialogConfig.width = '500px';  
    dialogConfig.height = '400px';  
    dialogConfig.data = {  
        userId: data.id 
    };  
    this.dialog.open(DisplaySinglemockUsersComponent, dialogConfig);  
}  

opendeletedialog(data){
  const dialogConfig = new MatDialogConfig();
  dialogConfig.disableClose = true;  
    dialogConfig.autoFocus = true;  
    dialogConfig.position = {  
        'top': '100px',  
        'left': '500px'  
    };  
    dialogConfig.width = '300px';  
    dialogConfig.height = '200px'; 
  dialogConfig.data = {  
    userId: data.id 
  };  

  this.dialog.open(DeleteConfirmationComponent,dialogConfig)
    

}
}
