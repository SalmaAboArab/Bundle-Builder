// export type SelectedTypes = {
//   cameras: ProductTypes[];
//   sensors: ProductTypes[];
//   accessories: ProductTypes[];
//   plan: ProductTypes[];
// };

// // export type SelectedItemTypes = {
// //   id: number;
// //   name: string;
// //   price: number;
// //   hasDiscount: boolean;
// //   discountPrice: number;
// //   count: number;
// //   image: string;
// // };

// export type ProductsNamesTypes = "cameras" | "plan" | "accessories" | "sensors";

// export type ProductTypes = {
//   id: number;
//   name: string;
//   desc: string;
//   price: number;
//   hasDiscount: boolean;
//   discountPercentage?: number;
//   discountPrice?: number;
//   image: string;
//   colors: any[];
//   defaultColor: "White" | 'Black' | 'Grey' | "";
//   selected?: boolean;
//   count: number;
// };



export type ProductCategory =
  | "cameras"
  | "sensors"
  | "accessories"
  | "plan";

export type ColorsType = {
  id: string;
  color: "White" | "Black" | "Grey";
  img: string;
  count: number;
  selected: number;
};

export type ProductType = {
  id: number;
  name: string;
  desc: string;
  image: string;
  price: number;
  hasDiscount: boolean;
  discountPercentage?:number
  discountPrice?: number;
  colors?: ColorsType[];
  selectedColor?: string;
  count?: number;
  selected?: number;
};

export type ProductsState = {
  cameras: ProductType[];
  sensors: ProductType[];
  accessories: ProductType[];
  plan: ProductType[];
};