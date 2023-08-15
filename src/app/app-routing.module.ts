import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGuard } from "./guards/auth.guard";
import { PageNotFoundComponent } from "./pages/public/page-not-found/page-not-found.component";

const routes: Routes = [
  {
    path: "senhas",
    loadChildren: () =>
      import("./pages/private/senhas/senhas.module").then(
        (module) => module.SenhasModule
      ),
    data: {
      title: "Senhas",
    },
  },
  {
    path: "**",
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
