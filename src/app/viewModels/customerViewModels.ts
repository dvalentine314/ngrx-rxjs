export interface CustomerItemViewModel {
  name: string;
  amount: number;
  price: number;
  total: number;
}

export interface CustomerTransactionViewModel {
  title: string;
  items: CustomerItemViewModel[];
}

export interface CustomerVisitViewModel {
  id: number;
  title: string;
  transactions: CustomerTransactionViewModel[];
}

export interface CustomerViewModel {
  id: number;
  title: string;
}
