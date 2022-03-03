import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// PrimeNG Modules
import { CalendarModule } from 'primeng/calendar';
import { DialogModule } from 'primeng/dialog';
import { PaginatorModule } from 'primeng/paginator';
import { PanelModule } from 'primeng/panel';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { AccordionModule } from 'primeng/accordion';
import { InputTextModule } from 'primeng/inputtext';
// import {InputMaskModule} from 'primeng/inputmask';
//App Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { TimeRecordFormComponent } from './components/time-record-form/time-record-form.component';
import { RecordsScreenComponent } from './components/records-screen/records-screen.component';
import { SingleRecordComponent } from './components/single-record/single-record.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// Services
import { RecordService } from './services/record.service';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    TimeRecordFormComponent,
    RecordsScreenComponent,
    SingleRecordComponent,
    TopbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DialogModule,
    AccordionModule,
    ButtonModule,
    PanelModule,
    CalendarModule,
    PaginatorModule,
    InputTextModule,
    // InputMaskModule,
    TabViewModule,
  ],
  providers: [
    RecordService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
