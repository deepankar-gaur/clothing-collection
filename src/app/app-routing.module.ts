import { NgModule} from '@angular/core'
import {Routes,RouterModule } from '@angular/router'

import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import{AboutUsComponent} from './about-us/about-us.component'
const routes : Routes = [
    {path:'',redirectTo:'/shop',pathMatch:'full'},
    {path:'login',component:LoginComponent},
   {path:'register',component:RegisterComponent},
   {path:'about-us',component:AboutUsComponent},

    {path:'shop',component:ShoppingCartComponent}

]

@NgModule({
  imports:[
      RouterModule.forRoot(routes)
  ], 
  exports:[
      RouterModule
  ]

})
export class AppRoutingModule{

}