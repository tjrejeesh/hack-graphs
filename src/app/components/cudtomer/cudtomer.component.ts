import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-cudtomer',
  templateUrl: './cudtomer.component.html',
  styleUrls: ['./cudtomer.component.less']
})
export class CudtomerComponent {
  title = 'Customer Attributes';
  details = ['Gamers', 'IoT Industrial', 'Smart Farming', 'Medical IoT'];
  customerForm: FormGroup;
  customerGroup: any;
  showgroup = false;
  loading = false;
  constructor(private fb: FormBuilder) {
   this.createForm();
 }
  createForm() {
   this.customerForm = this.fb.group({
      name: ['1000098'],
      address: ['3267'],
      network: '4G',
      time: ['346'],
      device: ['4'],
      streaming: 'Evening',
      userType: 'Consumer'
   });
 }
 getCustomerDetails() {
  this.showgroup = false;
  this.loading = true;
  setTimeout(
    (): void => {
      this.customerGroup = this.details[Math.floor(Math.random() * this.details.length)];
      this.showgroup = true;
      this.loading = false;
    },
    1000
  );
 }
}
