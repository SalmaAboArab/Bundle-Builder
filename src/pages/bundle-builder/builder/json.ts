import cam1 from "../../../assets/cameras/cam1.png";
import cam2 from "../../../assets/cameras/cam2.png";
import cam3 from "../../../assets/cameras/cam3.png";
import cam4 from "../../../assets/cameras/cam4.png";
import cam5 from "../../../assets/cameras/cam5.png";
import cam1B from "../../../assets/cameras/cam1B.png";
import cam1G from "../../../assets/cameras/cam1G.png";
import cam1W from "../../../assets/cameras/cam1W.png"; 
import cam2B from "../../../assets/cameras/cam2B.png";
import cam2W from "../../../assets/cameras/cam2W.png";
import cam3B from "../../../assets/cameras/cam3B.png";
import cam3W from "../../../assets/cameras/cam3W.png";
import cam5B from "../../../assets/cameras/cam5B.png";
import cam5W from "../../../assets/cameras/cam5W.png";

export const CamerasColors = {
    c1: [{color: "White", img: cam1W}, {color: "Black", img: cam1B}, {color: "Grey", img: cam1G}],
    c2: [{color: "White", img: cam2W}, {color: "Black", img: cam2B}],
    c3: [{color: "White", img: cam3W}, {color: "Black", img: cam3B}],
    c4: [],
    c5: [{color: "White", img: cam5W}, {color: "Black", img: cam5B}],
}

export const Cameras = [
    {
        id: 1,
        name: "Wyze Cam v4",
        desc: "The clearest Wyze Cam ever made.",
        price: 35.98,
        hasDiscount: true,
        discountPercentage: 22,
        discountPrice: 27.98,
        image: cam1,
        colors: CamerasColors["c1"],
        defaultColor: "White",
        count: 1,
    },
    {
        id: 2,
        name: "Wyze Cam Pan v3",
        desc: "360° pan and 180° tilt security camera.",
        price: 39.98,
        hasDiscount: true,
        discountPercentage: 12,
        discountPrice: 34.98,
        image: cam2,
        colors: CamerasColors["c2"],
        defaultColor: "White",
        count: 2,
    },
    {
        id: 3,
        name: "Wyze Cam Floodlight v2",
        desc: "2K floodlight camera with a 160° wide-angle view for your garage.",
        price: 89.98,
        hasDiscount: true,
        discountPercentage: 22,
        discountPrice: 69.98,
        image: cam3,
        colors: CamerasColors["c3"],
        defaultColor: "",
        count: 0,
    },
    {
        id: 4,
        name: "Wyze Duo Cam Doorbell",
        desc: "Two cameras. Two views. Double the porch protection.",
        price: 69.98,
        hasDiscount: false,
        // discountPercentage: 0,
        // discountPrice: 0,
        image: cam4,
        colors: [],
        defaultColor: "",
        count: 0,
    },
    {
        id: 5,
        name: "Wyze Battery Cam Pro",
        desc: "Protect anywhere. See everything in 2.5K HDR. No power outlet or electrician needed.",
        price: 89.98,
        hasDiscount: false,
        // discountPercentage: 0,
        // discountPrice: 0,
        image: cam5,
        colors: CamerasColors["c5"],
        defaultColor: "",
        count: 0,
    },

]