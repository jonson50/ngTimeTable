import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
   FormBuilder,
   FormControl,
   FormGroup,
   Validators,
} from '@angular/forms';

@Component({
  selector: 'app-time-record-form',
  templateUrl: './time-record-form.component.html',
  styleUrls: ['./time-record-form.component.css']
})
export class TimeRecordFormComponent implements OnInit {
  @Input() show: boolean = false;
  @Input() timeRecord: any = {};
  @Output() closeForm: EventEmitter<any> = new EventEmitter<any>();
  defaultStartTime: Date = new Date();
  defaultEndTime: Date = new Date();
  minDateValue: Date = new Date();
  maxDateValue: Date = new Date();

  public timeRecordForm: FormGroup;
  public valrecordDate:FormControl;
  public valstartTime: FormControl;

  constructor(private _fb: FormBuilder) {
     this.valrecordDate = this._fb.control('', Validators.required);
     this.valstartTime = this._fb.control({
        value: '',
        disabled: !this.valrecordDate.valid,
     });

     this.timeRecordForm = this._fb.group({
        recordDate: this.valrecordDate,
        startTime: this.valstartTime,
        endTime: [''],
        breakTime: [''],
        project: [''],
        comment: [''],
     });


  }

  ngOnInit(): void {}

  // Initializing Dialog
  onShowDialog() {
     if (!this.timeRecord.date) {
        const currentDate = new Date();
        while(true) {
           if(currentDate.getDay() == 1) {
              this.minDateValue.setDate(currentDate.getDate());
              break;
           }
           if(currentDate.getDay() == 0) {
              this.minDateValue.setDate(currentDate.getDate() - 6);
              break;
           }
           currentDate.setDate(currentDate.getDate() - 1);
        }
        this.maxDateValue.setDate(this.minDateValue.getDate() + 5);
        // Subcription to handle changes on the Date Field.
        this.valrecordDate.statusChanges.subscribe((newStatus) => {
           if (this.valrecordDate.valid) {
              this.valstartTime.enable();
           } else {
              this.valstartTime.disable();
           }
        });

        this.defaultStartTime = new Date();
        this.defaultStartTime.setHours(7, 0, 0, 0);
        //this.timeRecordForm.get('startTime')?.setValue(this.defaultStartTime);
     }
  }

  closeModal() {
     const response = {
        kind: 'close',
        value: null,
     };
     this.closeForm.emit(response);
     this.timeRecordForm.reset();
  }

  saveRecord() {
     const d = new Date();
     console.log(d);
     d.setMinutes(d.getMinutes() + 40);
     // console.log(d);
  }

  onSubmit() {
     this.timeRecordForm.controls['startTime'].enable();
     //this.timeRecordForm.controls.startTime.enable();
     console.log(this.timeRecordForm.value);
  }

  get f() {
     return this.timeRecordForm.controls;
  }
}
