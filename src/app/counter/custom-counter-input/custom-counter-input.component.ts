import { getText } from './../state/counter.selector';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeText, customIncrement } from '../state/counter.actions';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})

export class CustomCounterInputComponent {
  value!: any;
  text:any

constructor(private store:Store<CounterState>){
  this.store.select(getText).subscribe(data=>{
    console.log("text changed")
    this.text=data
  })
}

onAdd(){
  this.store.dispatch(customIncrement({value:+this.value}))
}

onChangeText(){
  this.store.dispatch(changeText())
}

}
