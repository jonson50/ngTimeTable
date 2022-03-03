import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/main/main.component';
import { RecordsScreenComponent } from './components/records-screen/records-screen.component';

const routes: Routes = [
  { path: '', component: MainComponent,
    children: [
      { path: '', component: RecordsScreenComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
