import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import type { ProductCategory, ProductsState } from "../types/main-types";
import { Cameras } from "../json/cameras-json";
import { Sensors } from "../json/sensors-json";
import { Accessories } from "../json/accessories-json";
import { Plans } from "../json/plan-json";

interface AppContextType {
  Products: ProductsState;

  setProducts: React.Dispatch<React.SetStateAction<ProductsState>>;

  increaseQuantity: (
    category: ProductCategory,
    productId: number,
    colorId?: string,
  ) => void;

  decreaseQuantity: (
    category: ProductCategory,
    productId: number,
    colorId?: string,
  ) => void;

  changeVariant: (
    category: ProductCategory,
    productId: number,
    colorId: string,
  ) => void;
  selectPlan: (planId: number) => void;

  selectedItems: ProductsState;

  subtotal: number;

  total: number;

  saving: number;

  //   saveSystem: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

interface Props {
  children: ReactNode;
}

export function AppProvider({ children }: Props) {
  const [Products, setProducts] = useState<ProductsState>({
    cameras: Cameras,

    sensors: Sensors,

    accessories: Accessories,

    plan: Plans,
  });

  const subtotal = useMemo(() => {
    let total = 0;

    Object.values(Products).forEach((category) => {
      category.forEach((product) => {
        if (product.colors?.length) {
          product.colors.forEach((color) => {
            total += product.price * (color.selected ?? 0);
          });
        } else {
          total += product.price * (product.selected ?? 0);
        }
      });
    });

    return total;
  }, [Products]);

  const total = useMemo(() => {
    let totalPrice = 0;

    Object.values(Products).forEach((category) => {
      category.forEach((product) => {
        const price = product.hasDiscount
          ? product.discountPrice!
          : product.price;

        if (product.colors?.length) {
          product.colors.forEach((color) => {
            totalPrice += price * (color.selected ?? 0);
          });
        } else {
          totalPrice += price * (product.selected ?? 0);
        }
      });
    });

    return totalPrice;
  }, [Products]);

  const saving = subtotal - total;

  const selectedItems: ProductsState = useMemo(() => ({
  cameras: Products.cameras.filter(
    p =>
      (p.colors?.some(c => c.selected > 0)) ||
      (p.selected ?? 0) > 0
  ),

  sensors: Products.sensors.filter(
    p => (p.selected ?? 0) > 0
  ),

  accessories: Products.accessories.filter(
    p => (p.selected ?? 0) > 0
  ),

  plan: Products.plan.filter(
    p => (p.selected ?? 0) > 0
  ),
}), [Products]);

  useEffect(() => {
    const saved = localStorage.getItem("savedProducts");

    if (!saved) return;

    setProducts(JSON.parse(saved));
  }, []);

  const increaseQuantity = (
    category: ProductCategory,
    productId: number,
    colorId?: string,
  ) => {
    setProducts((prev) => ({
      ...prev,
      [category]: prev[category].map((product) => {
        if (product.id !== productId) return product;

        // Product has variants
        if (product.colors && product.colors.length && colorId) {
          return {
            ...product,
            colors: product.colors.map((color) =>
              color.id === colorId
                ? {
                    ...color,
                    count: color.count - 1,
                    selected: color.selected + 1,
                  }
                : color,
            ),
          };
        }

        // Product without variants
        return {
          ...product,
          count: (product.count ?? 0) - 1,
          selected: (product.selected ?? 0) + 1,
        };
      }),
    }));
  };

  const decreaseQuantity = (
    category: ProductCategory,
    productId: number,
    colorId?: string,
  ) => {
    setProducts((prev) => ({
      ...prev,
      [category]: prev[category].map((product) => {
        if (product.id !== productId) return product;

        // Product has variants
        if (product.colors && product.colors.length && colorId) {
          return {
            ...product,
            colors: product.colors.map((color) =>
              color.id === colorId
                ? {
                    ...color,
                    count: Math.max(0, color.count + 1),
                    selected: Math.max(0, color.selected - 1),
                  }
                : color,
            ),
          };
        }

        // Product without variants
        return {
          ...product,
          selected: Math.max(0, (product.selected ?? 0) - 1),
          count: Math.max(0, (product.count ?? 0) + 1),
        };
      }),
    }));
  };

  const changeVariant = (
    category: ProductCategory,
    productId: number,
    colorId: string,
  ) => {
    setProducts((prev) => ({
      ...prev,
      [category]: prev[category].map((product) =>
        product.id === productId
          ? {
              ...product,
              selectedColor: colorId,
            }
          : product,
      ),
    }));
  };

  // const selectPlan = (planId: number) => {
  //   setProducts((prev) => ({
  //     ...prev,
  //     plan: prev.plan.map((plan) => ({
  //       ...plan,
  //       count: plan.id === planId ? 0 : 1,
  //       selected: plan.id === planId ? 1 : 0,
  //     })),
  //   }));
  // };

  const selectPlan = (planId: number) => {
    setProducts((prev) => {
      const currentPlan = prev.plan.find((plan) => plan.id === planId);

      if (!currentPlan) return prev;

      const isSelected = currentPlan.selected === 1;

      return {
        ...prev,
        plan: prev.plan.map((plan) => {
          if (plan.id === planId) {
            return {
              ...plan,
              selected: isSelected ? 0 : 1,
              count: isSelected ? 1 : 0,
            };
          }

          return {
            ...plan,
            selected: 0,
            count: 1,
          };
        }),
      };
    });
  };

  const value = useMemo(
    () => ({
      Products,

      setProducts,

      increaseQuantity,

      decreaseQuantity,

      changeVariant,

      selectPlan,

      selectedItems,

      subtotal,

      total,

      saving,
    }),
    [Products, selectedItems, subtotal, total, saving],
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
