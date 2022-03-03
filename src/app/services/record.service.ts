import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private records$ = new Subject<any>();
  private weekOrderedRecords = [];
  private recordsData: any[] = [
    {
      id: 1,
      date: '2022-02-14 22:05:06',
      start: '2022-02-14 06:00:00',
      end: '2022-02-14 10:00:00',
      break: 0,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 4,
      kind: 'worktime',
    },
    {
      id: 2,
      date: '2022-02-14 22:05:06',
      start: '2022-02-14 10:00:00',
      end: '2022-02-14 16:00:00',
      break: 60,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 5,
      kind: 'worktime',
    },
    {
      id: 3,
      date: '2022-02-15 22:05:06',
      start: '2022-02-15 08:00:00',
      end: '2022-02-15 16:45:00',
      break: 45,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 8,
      kind: 'worktime',
    },
    {
      id: 4,
      date: '2022-02-16 22:05:06',
      start: '2022-02-16 08:00:00',
      end: '2022-02-16 16:45:00',
      break: 45,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 8,
      kind: 'worktime',
    },
    {
      id: 5,
      date: '2022-02-17 22:05:06',
      start: '2022-02-17 07:00:00',
      end: '2022-02-17 13:00:00',
      break: 60,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 5,
      kind: 'worktime',
    },
    {
      id: 6,
      date: '2022-02-17 22:05:06',
      start: '2022-02-17 13:00:00',
      end: '2022-02-17 15:00:00',
      break: 0,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 2,
      kind: 'worktime',
    },
    {
      id: 7,
      date: '2022-02-18 22:05:06',
      start: '2022-02-18 08:00:00',
      end: '2022-02-15 18:45:00',
      break: 45,
      project: 'Project 1',
      comment: 'comment 1',
      workedHrs: 8,
      kind: 'worktime',
    },
  ];

  constructor() {
    //this.records$.next(this.recordsData);
    this.activeWeek();
  }

  private isSameDate(d1: Date, d2: Date): boolean {
    return `${d1.getDate()}.${d1.getMonth()}.${d1.getFullYear()}` ===
      `${d2.getDate()}.${d2.getMonth()}.${d2.getFullYear()}`
      ? true
      : false;
  }

  get weekRecords(): Observable<any> {
    //this.orderedRecords
    return this.records$.asObservable();
  }

  private activeWeek(): any[] {
    const currentDate = new Date('2022-02-17 22:05:06');
    let activeWeekDays: any[] = [];
    while (true) {
      if (currentDate.getDay() == 1) {
        activeWeekDays.push(new Date(currentDate));
        break;
      }
      if (currentDate.getDay() == 0) {
        currentDate.setDate(currentDate.getDate() - 6);
        activeWeekDays.push(new Date(currentDate));
        break;
      }
      currentDate.setDate(currentDate.getDate() - 1);
    }
    for (let i = 1; i < 7; i++) {
      currentDate.setDate(currentDate.getDate() + 1);
      activeWeekDays.push(new Date(currentDate));
    }
    return activeWeekDays;
  }
}
