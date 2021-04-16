import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 4';
  medicines = [
    {id: 1, name:'Ativan', brand: 'Cipla', quantity: 1, expiry:'', notes:'hello'},
    {id: 2, name:'Btivan', brand: 'Cipla', quantity: 1, expiry:'', notes:'hello'},
    {id: 3, name:'Ctivan', brand: 'Cipla', quantity: 1, expiry:'', notes:'hello'},
    {id: 4, name:'Etivan', brand: 'Cipla', quantity: 20, expiry:'', notes:'hello'},
    {id: 5, name:'Dtivan', brand: 'Cipla', quantity: 1, expiry:'', notes:'hello'},
];
  filteredMedicine = this.medicines;
  
  addNew(mName,mBrand,mQuantity,mExpiry){
    this.medicines.push({id: this.medicines.length + 1, name:mName, brand: mBrand, quantity: mQuantity, expiry:mExpiry, notes:'hello'});
  }

  search(value){
    if(value){
    this.filteredMedicine = this.medicines.filter( function(medicine) { return medicine.name.toLowerCase().indexOf(value.toLowerCase())>-1; });
    }
    else {
      this.filteredMedicine = this.medicines;
    }
   
  }
  

  

}
