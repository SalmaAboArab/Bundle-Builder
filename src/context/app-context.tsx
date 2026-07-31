import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { SelectedTypes } from "../types/main-types";
import { Cameras } from "../json/cameras-json";
import { Sensors } from "../json/sensors-json";
import { Accessories } from "../json/accessories-json";
import { Plans } from "../json/plan-json";


interface AppContextType {
  selectedProducts: SelectedTypes;
  setSelectedProducts: React.Dispatch<React.SetStateAction<SelectedTypes>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props) {
  const [selectedProducts, setSelectedProducts] = useState<SelectedTypes>({cameras: [], sensors: [], accessories: [], plan: []});

  useEffect(() => {
    const savedProducts: SelectedTypes = JSON.parse(localStorage.getItem("selectedProducts")!);
    if(savedProducts) setSelectedProducts(savedProducts)
    else setSelectedProducts({
    cameras: [
          // {
          //   id: 1,
          //   name: "Wyze Cam v4",
          //   price: 35.98,
          //   hasDiscount: true,
          //   discountPrice: 27.98,
          //   count: 1,
          //   image: "",
          // },
          // {
          //   id: 2,
          //   name: "Wyze Cam Pan v3",
          //   price: 39.98,
          //   hasDiscount: true,
          //   discountPrice: 34.98,
          //   count: 2,
          //   image: "",
          // },
          Cameras[0], Cameras[1]
        ],
        sensors: [
          Sensors[0], Sensors[1]
        ],
        accessories: [
          Accessories[0]
        ],
        plan: [
          Plans[1]
        ],
  })
  }, []);

  const value = useMemo(
    () => ({
      selectedProducts,
      setSelectedProducts,
    }),
    [selectedProducts],
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within AppProvider");
  }

  return context;
}
