import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { NbFirebasePasswordStrategy } from '@nebular/firebase-auth';
import { ThemeModule } from '../@theme/theme.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../../environments/environment';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthComponent } from './auth.component';
import { AppComponent } from '../app.component';
import { CoreModule } from '../@core/core.module';

@NgModule({
  declarations: [AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    // NbAuthModule.forRoot({
    //   strategies: [
    //     NbFirebasePasswordStrategy.setup({
    //       name: 'password',
    //     }),
    //   ],
    //   forms: {},
    // }), ThemeModule.forRoot(),
  ]
})
export class AuthModule { }
