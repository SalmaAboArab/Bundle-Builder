// Accessories
import accessory1 from "../assets/accessories/wyze-microsd-card.webp";
import accessory2 from "../assets/accessories/wyze-outdoor-power-adapter.webp";
import accessory3 from "../assets/accessories/wyze-battery-cam-pro.webp";
import accessory4 from "../assets/accessories/wyze-cam-usb-extension-cable.webp";
import accessory5 from "../assets/accessories/wyze-battery-cam-solar-panel.webp";

export const Accessories = [
  {
    id: 201,
    name: "MicroSD Card 32GB",
    desc: "Store continuous local recordings.",
    price: 8.99,
    hasDiscount: false,
    image: accessory1 || '',
    colors: [],
    defaultColor: "",
    count: 1,
    selected: true,
  },
  {
    id: 202,
    name: "Outdoor Power Adapter",
    desc: "Weather-resistant adapter for outdoor cameras.",
    price: 14.99,
    hasDiscount: true,
    discountPercentage: 13,
    discountPrice: 12.99,
    image: accessory2 || '',
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 203,
    name: "Wyze Battery Cam Pro",
    desc: "2.5K Outdoor Cam with Spotlight.",
    price: 9.99,
    hasDiscount: false,
    image: accessory3 || '',
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 204,
    name: "USB Extension Cable",
    desc: "Extra reach for flexible camera placement.",
    price: 11.99,
    hasDiscount: false,
    image: accessory4 || '',
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 205,
    name: "Solar Panel",
    desc: "Keep your battery camera charged using solar power.",
    price: 29.99,
    hasDiscount: true,
    discountPercentage: 17,
    discountPrice: 24.99,
    image: accessory5 || '',
    colors: [],
    defaultColor: "",
    count: 0,
  },
];