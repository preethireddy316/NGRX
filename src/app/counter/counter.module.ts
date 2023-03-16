import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './state/counter.reducer';

const routes :Routes=[{path:'',component:CounterComponent}]

@NgModule({
    declarations:[CounterComponent,CounterButtonsComponent,CounterOutputComponent,CustomCounterInputComponent],
    imports:[RouterModule.forChild(routes),StoreModule.forFeature('counter',counterReducer),CommonModule,ReactiveFormsModule,FormsModule],
})

export class CounterModule{

}