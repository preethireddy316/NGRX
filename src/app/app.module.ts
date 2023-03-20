import { AuthService } from 'src/app/service/auth.service';
import { isDevMode, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { LoadingSpinnerComponent } from './shared/components/loading-spinner/loading-spinner.component';
import { AuthModule } from './auth/auth.module';
// import { appReducer } from './store/app.state';
// import { AuthEffects } from './auth/state/auth.effects';
// import { AuthReducer } from './auth/state/auth.reducer';

@NgModule({
  declarations: [
    AppComponent,LoadingSpinnerComponent,
    HomeComponent,
    HeaderComponent,
  ],imports: [
    BrowserModule,FormsModule,HttpClientModule,ReactiveFormsModule,AuthModule,EffectsModule.forRoot([]),AppRoutingModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: !isDevMode(), // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
      trace: false, //  If set to true, will include stack trace for every dispatched action, so you can see it in trace tab jumping directly to that part of code
      traceLimit: 75, // maximum stack trace frames to be stored (in case trace option was provided as true)
    }),
  ],providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
