import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordsScreenComponent } from './records-screen.component';

describe('RecordsScreenComponent', () => {
  let component: RecordsScreenComponent;
  let fixture: ComponentFixture<RecordsScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordsScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecordsScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
