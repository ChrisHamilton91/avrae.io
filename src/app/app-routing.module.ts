import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CommandsUiComponent } from "./commands-ui/commands-ui.component";

const routes: Routes = [{ path: "**", component: CommandsUiComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
