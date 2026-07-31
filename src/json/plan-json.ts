import planImg from '../assets/plan.jpg';
import type { ProductTypes } from '../types/main-types';

export const Plans: ProductTypes[] = [
  {
    id: 301,
    name: "Cam Plus",
    desc: "Unlimited event video length, AI detection, and smart alerts.",
    price: 2.99,
    hasDiscount: true,
    discountPercentage: 17,
    discountPrice: 2.49,
    image: planImg,
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 302,
    name: "Cam Unlimited",
    desc: "Premium AI features for all your cameras under one subscription.",
    price: 9.99,
    hasDiscount: false,
    image: planImg,
    colors: [],
    defaultColor: "",
    count: 1,
    selected: true,
  },
  {
    id: 303,
    name: "Home Monitoring",
    desc: "24/7 professional monitoring with emergency dispatch support.",
    price: 19.99,
    hasDiscount: true,
    discountPercentage: 15,
    discountPrice: 16.99,
    image: planImg,
    colors: [],
    defaultColor: "",
    count: 0,
  },
];