import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommandsUiComponent } from './commands-ui/commands-ui.component';
import {CommandsComponent} from './commands/commands.component';
import {ErrorComponent} from './error/error.component';

import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {SsrGuard} from './ssr/ssr.guard';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'commands', component: CommandsComponent},
  {path: 'commands-ui', component: CommandsUiComponent},
  {path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(mod => mod.DashboardModule)},
  {path: 'ssr', loadChildren: () => import('./ssr/ssr.module').then(mod => mod.SsrModule), canLoad: [SsrGuard]},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
