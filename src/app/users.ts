import { HttpClient } from '@angular/common/http';
import { inject, Injectable, Service } from '@angular/core';
import { Observable, of } from 'rxjs';

@Service({
    autoProvided: false
})

// @Injectable({
//     providedIn: 'root'
// })

export class Users {

    private readonly httpClient = inject(HttpClient);

    // constructor(private httpClient: HttpClient) {

    // }
  
    getName(): Observable<string> {
        return of('Angular 22 Updates');
    }

}
