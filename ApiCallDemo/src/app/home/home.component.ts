import { Component, OnInit } from '@angular/core';
import { WebserviceService } from '../services/webservice.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private webservice:WebserviceService) { }
record:any={}
  ngOnInit() {
    this.getRecord()
  }
  getRecord() {
    let requestData:any={}
    this.webservice.postRequest("api.php", requestData).
      subscribe(
        (data: any) => {
          // write logic on data
          this.record=data;
          console.log(this.record)
          if(this.record.Courses)
          {
            for(let i of this.record.Courses)
            {
              console.log(i.name);
            }
          }
        },
        (error: any) => {
        }
      );
  }
}
