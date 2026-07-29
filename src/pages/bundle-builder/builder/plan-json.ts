// Plans
import plan1 from "../../../assets/plans/plan1.png";
import plan2 from "../../../assets/plans/plan2.png";
import plan3 from "../../../assets/plans/plan3.png";

export const Plans = [
  {
    id: 301,
    name: "Cam Plus",
    desc: "Unlimited event video length, AI detection, and smart alerts.",
    price: 2.99,
    hasDiscount: true,
    discountPercentage: 17,
    discountPrice: 2.49,
    image: plan1,
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
    image: plan2,
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 303,
    name: "Home Monitoring",
    desc: "24/7 professional monitoring with emergency dispatch support.",
    price: 19.99,
    hasDiscount: true,
    discountPercentage: 15,
    discountPrice: 16.99,
    image: plan3,
    colors: [],
    defaultColor: "",
    count: 0,
  },
];