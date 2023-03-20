import { AppState } from 'src/app/store/app.state';
import { isAuthenticated } from './../auth/state/auth.selector';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthState } from '../auth/state/auth.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAuthenticated:Observable<boolean>

  constructor(private store:Store<AppState>){
    this.isAuthenticated=this.store.select(isAuthenticated)
    console.log(this.isAuthenticated,"header")

  }
}
