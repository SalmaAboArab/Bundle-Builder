// Sensors
import sensor1 from "../assets/sensors/wyze-sense-motion-sensor.webp";
import sensor2 from "../assets/sensors/wyze-sense-entry-sensor.webp";
import sensor3 from "../assets/sensors/wyze-sense-climate-sensor.webp";
import sensor4 from "../assets/sensors/wyze-sense-leak-sensor-probe-wyze-labs-inc-800434.webp";
import type { ProductType } from "../types/main-types";

export const Sensors: ProductType[] = [
  {
    id: 101,
    name: "Wyze Sense Motion Sensor",
    desc: "Detects movement instantly and automates your smart home.",
    price: 14.98,
    hasDiscount: true,
    discountPercentage: 20,
    discountPrice: 11.98,
    image: sensor1,
    // colors: [],
    // selectedColor: "",
    count: 5,
    selected: 2,
  },
  {
    id: 102,
    name: "Wyze Sense Entry Sensor",
    desc: "Monitor doors, windows, cabinets, and more.",
    price: 19.98,
    hasDiscount: false,
    image: sensor2,
    // colors: [],
    // selectedColor: "",
    count: 3,
    selected: 1,
  },
  {
    id: 103,
    name: "Wyze Climate Sensor",
    desc: "Track temperature and humidity throughout your home.",
    price: 24.98,
    hasDiscount: true,
    discountPercentage: 16,
    discountPrice: 20.98,
    image: sensor3,
    // colors: [],
    // selectedColor: "",
    count: 2,
    selected: 0
  },
  {
    id: 104,
    name: "Wyze Leak Sensor",
    desc: "Get notified immediately when water is detected.",
    price: 17.98,
    hasDiscount: false,
    image: sensor4,
    // colors: [],
    // selectedColor: "",
    count: 7,
    selected: 0,
  },
];