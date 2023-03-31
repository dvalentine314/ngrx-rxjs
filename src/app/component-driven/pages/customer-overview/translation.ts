import {
  CustomerPurchasedItem,
  CustomerVisit,
} from '../../../resource-access/customerResourceModels';
import {
  CustomerItemViewModel,
  CustomerTransactionViewModel,
  CustomerVisitViewModel,
} from './customerViewModels';

export function mapCustomerVisitToViewModel(
  customerVisit: CustomerVisit
): CustomerVisitViewModel {
  return {
    id: customerVisit.id,
    title: customerVisit.title,
    transactions: customerVisit.transactions.map(mapCustomerTransactionToViewModel),
  };
}

export function mapCustomerTransactionToViewModel(
  customerTransaction: CustomerVisit['transactions'][number]
): CustomerTransactionViewModel {
  const items = customerTransaction.items.map(mapCustomerItemToViewModel);
  return {
    title: customerTransaction.title,
    items: items,
    total: items.reduce((acc, item) => acc + item.total, 0),
  };
}

export function mapCustomerItemToViewModel(
  customerItem: CustomerPurchasedItem
): CustomerItemViewModel {
  return {
    name: customerItem.name,
    amount: customerItem.amount,
    price: customerItem.price,
    total: customerItem.amount * customerItem.price,
  };
}
