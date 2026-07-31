export type SelectedTypes = {
  cameras: ProductTypes[];
  sensors: ProductTypes[];
  accessories: ProductTypes[];
  plan: ProductTypes[];
};

// export type SelectedItemTypes = {
//   id: number;
//   name: string;
//   price: number;
//   hasDiscount: boolean;
//   discountPrice: number;
//   count: number;
//   image: string;
// };

export type ProductsNamesTypes = "cameras" | "plan" | "accessories" | "sensors";

export type ProductTypes = {
  id: number;
  name: string;
  desc: string;
  price: number;
  hasDiscount: boolean;
  discountPercentage?: number;
  discountPrice?: number;
  image: string;
  colors: any[];
  defaultColor: "White" | 'Black' | 'Grey' | "";
  selected?: boolean;
  count: number;
};
