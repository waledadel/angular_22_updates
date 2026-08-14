import { inject, Service } from '@angular/core';

import { IS_PRODUCTION } from './injection-tokens';

@Service({
    factory: () => inject(IS_PRODUCTION) ? new Production() : new Development()
})

// @Injectable({
//     providedIn: 'root'
// })

export class Users {

    settName(name: string): void {
        console.log('Users service', name);
    }
}

export class Development extends Users {
    override settName(name: string): void {
        console.log('Dev Mode', name);
    }
}

export class Production extends Users {
    override settName(name: string): void {
        console.log('Prod Mode', name);
    }
}