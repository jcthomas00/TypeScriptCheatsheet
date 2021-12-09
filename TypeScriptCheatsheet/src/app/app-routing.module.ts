import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TSFuncOverloadComponent } from './tsfunc-overload/tsfunc-overload.component';
import { TSFunctionsComponent } from './tsfunctions/tsfunctions.component';
import { TSModulesComponent } from './tsmodules/tsmodules.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path:"function-overload", component:TSFuncOverloadComponent},
  {path:"functions", component:TSFunctionsComponent},
  {path:"modules", component:TSModulesComponent},
  {path:"", redirectTo:"functions", pathMatch:"full"}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
