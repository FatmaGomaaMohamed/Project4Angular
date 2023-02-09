import { Component } from '@angular/core';
import { DemoService } from 'src/app/Services/demo.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [
  ]
})
export class UsersComponent {
  users:any;
  constructor(myService:DemoService){
    myService.GetAllUsers().subscribe(
        {
          next:(data)=>{
            //console.log(data)
            this.users = data;
          },
          error:(err)=>{console.log(err)}
        }
      )
  }
}
