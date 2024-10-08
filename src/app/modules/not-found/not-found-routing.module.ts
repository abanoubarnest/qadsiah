import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// PAGES
import { NotFoundComponent } from './pages';

const routes: Routes = [
  {
    path: '404',
    component: NotFoundComponent,
  },
  {
    path: '',
    redirectTo: '404',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotFoundRoutingModule {}
