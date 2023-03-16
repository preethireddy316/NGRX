import { AppState } from 'src/app/store/app.state';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getLoading, getErrorMessage } from './store/shared/shared.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:any = 'ngrx-counter';
  showLoading?:boolean
  ErrorMsg?:string
  // :Observable<boolean>

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.select(getLoading).subscribe(data=>{
      this.showLoading=data
    });
   this.store.select(getErrorMessage).subscribe(data=>{
    this.ErrorMsg=data
   })
  
}
}