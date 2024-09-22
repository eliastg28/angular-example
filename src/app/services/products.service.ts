import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';

import type { User, UserResponse, UsersResponse } from '@interfaces/req-response';
import { delay, map } from 'rxjs';


interface State {
  users: User[];
  loading: boolean;
}

const urlBase = 'https://products/api/v1';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private http = inject( HttpClient );

  #state = signal<State>({
    loading: true,
    users: [],
  });

  public users = computed( () => this.#state().users );
  public loading = computed( () => this.#state().loading );



  constructor() {

    this.http.get<UsersResponse>(`${urlBase}/products`)
      .pipe( delay(1500) )
      .subscribe( res => {

        this.#state.set({
          loading: false,
          users: res.data,
        })

      });

  }

  getUserById( id: string ) {
    return this.http.get<UserResponse>(`${urlBase}/products/${id}`)
      .pipe(
        delay(1500),
        map( resp => resp.data )
      )

  }


}

