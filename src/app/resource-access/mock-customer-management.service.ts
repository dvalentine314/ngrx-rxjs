import { Injectable } from '@angular/core';
import { CustomerVisit, Customer } from './customerResourceModels';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockCustomerManagementService {
  getCustomer(customerId: number): Observable<Customer> {
    return of({
      id: 1,
      title: 'customer 1',
    });
  }

  getCustomerCustomerVisits(customerId: number): Observable<Array<CustomerVisit>> {
    return of(<Array<CustomerVisit>>[
      {
        id: 1,
        title: 'CustomerVisit 1',
        transactions: [
          {
            title: 'CustomerTransaction 1',
            items: [
              {
                name: 'Item 1',
                amount: 1,
                price: 1,
              },
              {
                name: 'Item 2',
                amount: 1,
                price: 1,
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
    ]);
  }

  getCustomerVisit(customerVisitId: number): Observable<CustomerVisit> {
    return of({
      id: 1,
      title: 'CustomerVisit 1',
      transactions: [
        {
          title: 'CustomerTransaction 1',
          items: [
            {
              name: 'Item 1',
              amount: 1,
              price: 1,
            },
            {
              name: 'Item 2',
              amount: 1,
              price: 1,
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
    });
  }
}
