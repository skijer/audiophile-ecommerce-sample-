import { NgModule } from '@angular/core';
import { RouterModule, Routes,  Scroll } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EarphonesComponent } from './earphones/earphones.component';
import { HeadphonesComponent } from './headphones/headphones.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component:HomeComponent},
  { path: 'earphones', component:EarphonesComponent},
  { path: 'headphones', component:HeadphonesComponent},
  { path: 'speakers', component:SpeakersComponent},
  { path: 'product/:id', component:ProductComponent},
  { path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
