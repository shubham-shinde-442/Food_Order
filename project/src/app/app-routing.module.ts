import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartPageComponent } from './cart_pg/cart_pg.component';
import { FoodpageComponent } from './food_pg/food_pg.component';
import { HomeComponent } from './home_pg/home_pg.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "search/:searchItem", component: HomeComponent},
  {path: "tag/:tag", component: HomeComponent},
  {path: "food/:id", component: FoodpageComponent},
  {path: "cart-page", component: CartPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
