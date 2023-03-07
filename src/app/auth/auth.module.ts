import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { AuthReducer, AUTH_STATE_NAME } from './state/auth.reducer';
import { AuthEffects } from './state/auth.effects';

const routes:Routes = [{path:'',
children:[{path:"",redirectTo :"login",pathMatch:'full'},{path:'login',component:LoginComponent}
]}]

@NgModule({
    imports:[CommonModule,RouterModule.forChild(routes),StoreModule.forFeature(AUTH_STATE_NAME,AuthReducer),ReactiveFormsModule],declarations:[LoginComponent,AuthEffects]
})


export class AuthModule{

} 