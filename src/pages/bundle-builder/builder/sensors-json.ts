// Sensors
import sensor1 from "../../../assets/sensors/sensor1.png";
import sensor2 from "../../../assets/sensors/sensor2.png";
import sensor3 from "../../../assets/sensors/sensor3.png";
import sensor4 from "../../../assets/sensors/sensor4.png";

export const Sensors = [
  {
    id: 101,
    name: "Wyze Sense Motion Sensor",
    desc: "Detects movement instantly and automates your smart home.",
    price: 14.98,
    hasDiscount: true,
    discountPercentage: 20,
    discountPrice: 11.98,
    image: sensor1,
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 102,
    name: "Wyze Sense Entry Sensor",
    desc: "Monitor doors, windows, cabinets, and more.",
    price: 19.98,
    hasDiscount: false,
    image: sensor2,
    colors: [],
    defaultColor: "",
    count: 0,
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
    colors: [],
    defaultColor: "",
    count: 0,
  },
  {
    id: 104,
    name: "Wyze Leak Sensor",
    desc: "Get notified immediately when water is detected.",
    price: 17.98,
    hasDiscount: false,
    image: sensor4,
    colors: [],
    defaultColor: "",
    count: 0,
  },
];