import { Component, OnInit } from '@angular/core';
import { RecordService } from 'src/app/services/record.service';

@Component({
  selector: 'app-records-screen',
  templateUrl: './records-screen.component.html',
  styleUrls: ['./records-screen.component.css'],
})
export class RecordsScreenComponent implements OnInit {
  disable = false;
  showFormTime = false;

  constructor(private recordService: RecordService) {
    //console.log(this.recordService.activeWeek());
  }

  ngOnInit(): void {}

  showTimeRecordForm(): void {
    this.showFormTime = true;
  }

  closeTimeRecordForm(event: any): void {
    console.log(event);
    this.showFormTime = false;
  }
}
