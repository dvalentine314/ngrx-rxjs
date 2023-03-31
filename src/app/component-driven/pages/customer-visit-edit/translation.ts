import {
  CustomerPurchasedItem,
  CustomerVisit,
} from 'src/app/resource-access/customerResourceModels';
import {
  CustomerItemEditViewModel,
  CustomerTransactionEditViewModel,
  CustomerVisitEditViewModel,
} from './customer-edit-ViewModel';

export function mapCustomerVisitToViewModel(
  customerVisit: CustomerVisit
): CustomerVisitEditViewModel {
  return {
    id: customerVisit.id,
    title: customerVisit.title,
    transactions: customerVisit.transactions.map(mapCustomerTransactionToViewModel),
  };
}

export function mapCustomerTransactionToViewModel(
  customerTransaction: CustomerVisit['transactions'][number]
): CustomerTransactionEditViewModel {
  const items = customerTransaction.items.map(mapCustomerItemToViewModel);
  return {
    title: customerTransaction.title,
    items: items,
    total: items.reduce((acc, item) => acc + item.total, 0),
  };
}

export function mapCustomerItemToViewModel(
  customerItem: CustomerPurchasedItem
): CustomerItemEditViewModel {
  return {
    name: customerItem.name,
    amount: customerItem.amount,
    price: customerItem.price,
    total: customerItem.amount * customerItem.price,
  };
}
