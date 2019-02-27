import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { QuoteComponent } from './quote/quote.component';
import { TestComponent } from './test/test.component';


const routes: Routes = [
   {path: '',     component: LoginComponent},
   {path: 'home', component: SideNavComponent,
   children: [
      {path: 'quote',  component: QuoteComponent, children:
         [{path: ':policyType/:state/:company', component: TestComponent }]
      }
   ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
