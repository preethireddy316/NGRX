import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { getCounter } from '../state/counter.selector';
import { CounterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css']
})

export class CounterOutputComponent implements OnInit {
  // @Input()
  // counter!: number;
  counter:number | undefined ;
  constructor(private store:Store<AppState>){
  }

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((data)=>{
      console.log("counter called")
      this.counter=data
    })
  }
}
