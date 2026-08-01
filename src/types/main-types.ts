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