import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedUiModule } from '@store/shared/ui';

import { AppComponent } from './app.component';
import { NxWelcomeComponent } from './nx-welcome.component';
import { ShopComponent } from './shop/shop.component';

@NgModule({
  declarations: [AppComponent, NxWelcomeComponent, ShopComponent],
  imports: [BrowserModule, SharedUiModule,
    RouterModule.forRoot([
      {
        path: 'cart',
        // eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
        loadChildren: () => import('@store/cart').then((m) => m.CartModule),
      },
      {
        path: '**',
        component: ShopComponent,
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
