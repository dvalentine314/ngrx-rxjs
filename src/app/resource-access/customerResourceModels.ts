export interface CustomerPurchasedItem {
  name: string;
  amount: number;
  price: number;
}

export interface CustomerTransaction {
  title: string;
  items: CustomerPurchasedItem[];
}

export interface CustomerVisit {
  id: number;
  title: string;
  transactions: CustomerTransaction[];
}

export interface Customer {
  id: number;
  title: string;
}
