import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegisterComponent } from './componentes/register/register.component';
import { MainLayoutComponent } from './componentes/main-layout/main-layout.component';
import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { DasboardComponent } from './componentes/dasboard/dasboard.component';
import { UserListComponent } from './componentes/user-list/user-list.component';
import { AddCustomerComponent } from './componentes/add-customer/add-customer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent, canActivate: [AuthGuard] },
  { path: 'main', component: MainLayoutComponent, canActivate: [AuthGuard],
    children: [
      { path: 'dashboard', component: DasboardComponent },
      { path: 'clientList', component: UserListComponent },
      { path: 'addCustomer', component: AddCustomerComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
