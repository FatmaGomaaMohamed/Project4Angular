import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: [
  ]
})
export class UserDetailsComponent {
  // ID=0;
  // constructor(myActivated:ActivatedRoute){
  //   //console.log(myActivated.snapshot.params["id"]);
  //   this.ID = myActivated.snapshot.params["id"];
  // }
  user:any;
  ID=0;
  constructor(myService:DemoService,myActivated:ActivatedRoute){
    this.ID = myActivated.snapshot.params["id"];
    myService.GetUserByID(this.ID).subscribe(
        {
          next:(data)=>{
            //console.log(data)
            this.user = data;
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
}
