import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SenhasComponent } from "./senhas.component";

const routes: Routes = [
  {
    path: "",
    component: SenhasComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SenhasRoutingModule { }
