  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import {  StepperComponent } from '../stepper/stepper.component'
  
  @Component({
    selector: 'app-investiment',
    templateUrl: './investiment.component.html',
    styleUrls: ['./investiment.component.css']
  })
  export class InvestimentComponent implements OnInit {
    
    @Input() valueStake: boolean = true
    value = 15000
    
    constructor(private stepperComponent: StepperComponent) { }
   
    ngOnInit() {

    }

   step = 0;

    setStep(index: number) {
      this.step = index;
    }

    nextStep() {
      this.step++;
    }

    prevStep() {
      this.step--;
    }

    times = [
      '1 year maximum',
      'Beteween 1 and 2 years',
      'Over 2 years',
    ];

     stake(valueStake){
        this.stepperComponent.stakeSteper(valueStake);
    }

    Ivalue(value){
        this.stepperComponent.valueSteper(value);
    }

    myTime(time) {
       this.stepperComponent.timeSteper(time); 
    }
  }