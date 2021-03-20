import { Component, OnInit,Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MockappService} from '../../service/mockapp.service';

@Component({
  selector: 'app-delete-confirmation',
  templateUrl: './delete-confirmation.component.html',
  styleUrls: ['./delete-confirmation.component.css']
})
export class DeleteConfirmationComponent implements OnInit {
  message: string = "Are you sure?";
  confirmButtonText = "Yes";
  cancelButtonText = "Cancel";
  UserId: number; 


  constructor(private service:MockappService,
    @Inject(MAT_DIALOG_DATA) data,
    private dialogRef: MatDialogRef<DeleteConfirmationComponent>) {
      this.UserId = data.userId 
      if(data){
        this.message = data.message || this.message;
        if (data.buttonText) {
          this.confirmButtonText = data.buttonText.ok || this.confirmButtonText;
          this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
        }
          }
     }

  ngOnInit(): void {
  }
  onConfirmClick(): void {
    this.service.deletesingleuser(this.UserId).subscribe(response =>{
      alert(`user with id:${this.UserId} deleted successfully`);
      window.location.reload();
    })
  }
  cancel(){
    this.dialogRef.close();

  }

}
