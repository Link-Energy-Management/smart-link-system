import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbFirebaseGoogleStrategy, NbFirebasePasswordStrategy } from '@nebular/firebase-auth';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule,
    NbAuthModule.forRoot({
      strategies: [
        NbFirebasePasswordStrategy.setup({
          name: 'email',
          login: {
            redirect: {
              success: 'pages',
            },
          },
        }),
      ],
      forms: {},
    }),
  ],
  providers: [
    NbFirebasePasswordStrategy,
  ],
})
export class AuthModule { }
