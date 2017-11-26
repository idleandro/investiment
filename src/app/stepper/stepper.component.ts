import { Component,ViewChild,  OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatStepLabel, MatStepper} from '@angular/material';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.css']
})
export class StepperComponent implements OnInit {
	 isLinear = true
   stake = false
   value = 15000
   time = '1 year maximum'
   statusTake = 'High Risk'
   name
   age 
	 firstFormGroup: FormGroup;
	 secondFormGroup: FormGroup;

 constructor(private _formBuilder: FormBuilder) {  }
  numberPattern = /^[1-9]*$/

 ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      name: this._formBuilder.control('', [Validators.required, Validators.minLength(3)]),
      age: this._formBuilder.control('', [Validators.required, Validators.minLength(2), Validators.maxLength(2), Validators.pattern(this.numberPattern)]),

    });
      this.secondFormGroup = this._formBuilder.group({
      
    });
  }

  stakeSteper(valueStake){
    this.stake =  valueStake
    if((!this.stake)) {
      this.statusTake = "High Risk"
    } else { 
        this.statusTake = "Low Risk"
     }
  }

  valueSteper(value) {
    this.value = value
  }

  timeSteper(time) {
    this.time = time
  }
}