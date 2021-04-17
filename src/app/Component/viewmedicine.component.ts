import { Component } from '@angular/core';
import { DataService } from '../Service/medicine.servie';
import { ActivatedRoute } from '@angular/router';
import { checkAndUpdateBinding } from '@angular/core/src/view/util';


@Component({
  selector: 'app-root',
  templateUrl: './viewmedicine.component.html',
  styleUrls: ['./viewmedicine.component.css']
})
export class ViewmedicineComponent {
  showModal: boolean;
  content: string;
  title: string;
  medicines = {}

  constructor(private route: ActivatedRoute, private dataService: DataService) { }
show()
{
  this.showModal = true; // Show-Hide Modal Check
  this.title = "Edit Medicine";    // Dynamic Data
}
//Bootstrap Modal Close event
hide()
{
  this.showModal = false;
}

public ngOnInit()
  {
   this.getMedicineById();
  }

  getMedicineById(){
    if(this.route.snapshot.queryParamMap.get('id')){
    this.dataService.getMedicineById(this.route.snapshot.queryParamMap.get('id')).subscribe((data: any[])=>{
     this.medicines = data
    }) 
  }
  }

  update(medicine){
    this.dataService.sendSaveRequest(
      medicine).subscribe((response: any[])=>{
      this.getMedicineById()
      this.hide();
    });
  }
}
