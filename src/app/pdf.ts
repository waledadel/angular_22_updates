import { Service } from '@angular/core';

@Service()
export class PDF {
  
    print(): void {
        window.print();
    }

}
