import { Injectable } from '@angular/core';
import { CustomerVisit, Customer } from './customerResourceModels';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
/** a delay of 3 seconds was provided to calls to simulate round trips from network requests*/
export class MockCustomerManagementService {
  getCustomer(customerId: number): Observable<Customer> {
    return of({
      id: 1,
      title: 'customer 1',
    }).pipe(delay(3000));
  }

  private customerVisits: Array<CustomerVisit> = <Array<CustomerVisit>>[
    {
      id: 1,
      title: 'CustomerVisit 1',
      transactions: [
        {
          title: 'CustomerTransaction 1',
          items: [
            {
              name: 'Item 1',
              amount: 2,
              price: 2,
            },
            {
              name: 'Item 2',
              amount: 1,
              price: 2,
            },
          ],
        },
        {
          title: 'CustomerTransaction 2',
          items: [
            {
              name: 'Item 3',
              amount: 1,
              price: 1,
            },
            {
              name: 'Item 4',
              amount: 1,
              price: 1,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: 'CustomerVisit 2',
      transactions: [
        {
          title: 'CustomerTransaction 3',
          items: [
            {
              name: 'Item 5',
              amount: 1,
              price: 1,
            },
            {
              name: 'Item 6',
              amount: 1,
              price: 1,
            },
          ],
        },
        {
          title: 'CustomerTransaction 4',
          items: [
            {
              name: 'Item 7',
              amount: 1,
              price: 1,
            },
            {
              name: 'Item 8',
              amount: 1,
              price: 1,
            },
          ],
        },
      ],
    },
  ];

  getCustomerCustomerVisits(customerId: number): Observable<Array<CustomerVisit>> {
    return of(this.customerVisits).pipe(delay(3000));
  }

  getCustomerVisit(customerVisitId: number): Observable<CustomerVisit | undefined> {
    return of(this.customerVisits.find((z) => z.id === customerVisitId)).pipe(
      delay(3000)
    );
  }

  updateCustomerVisit(customerVisit: CustomerVisit): Observable<void> {
    const index = this.customerVisits.findIndex((z) => z.id === customerVisit.id);
    if (index >= 0) {
      this.customerVisits[index] = customerVisit;
    }
    return of(undefined).pipe(delay(3000));
  }
}
