import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
 // { path: '', redirectTo: '/home', pathMatch: 'full' },  // Redirect empty path to home
 // { path: 'home', component: AppComponent },
    {
    path: 'auth',
    loadChildren: () => import('@modules/auth/auth.module').then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
