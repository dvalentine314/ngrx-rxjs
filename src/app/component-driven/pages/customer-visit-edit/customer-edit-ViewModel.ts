export interface CustomerItemEditViewModel {
  name: string;
  amount: number;
  price: number;
  total: number;
}

export interface CustomerTransactionEditViewModel {
  title: string;
  items: CustomerItemEditViewModel[];
  total: number;
}

export interface CustomerVisitEditViewModel {
  id: number;
  title: string;
  transactions: CustomerTransactionEditViewModel[];
}
