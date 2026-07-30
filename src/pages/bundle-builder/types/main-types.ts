export type SelectedTypes = {
  cameras: SelectedItemTypes[];
  sensors: [];
  accessories: [];
  plan: [];
};

export type SelectedItemTypes ={
    id: number;
    name: string;
    price: number;
    hasDiscount: boolean;
    discountPrice: number;
    count: number;
    image: string;
  }