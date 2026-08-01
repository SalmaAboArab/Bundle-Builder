import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import type { ProductCategory, ProductType } from "../../../types/main-types";
// import img from "../../../assets/hero.png";
import CountButtons from "../../../shared-components/count-buttons";
import { useAppContext } from "../../../context/app-context";

export default function SelectedItemGroup({
  title,
  data,
}: {
  title: ProductCategory;
  data: ProductType[];
}) {
  const theme = useTheme();
  const { decreaseQuantity, increaseQuantity } = useAppContext();

  // const selectedData = data.flatMap((item) => {
  //   if (item.colors?.length) {
  //     return item.colors
  //       .filter((c) => c.selected > 0)
  //       .map((c) => ({
  //         ...item,
  //         name: `${item.name} - ${c.color}`,
  //         image: c.img,
  //         selected: c.selected,
  //         count: c.count,
  //       }));
  //   }

  //   return (item.selected ?? 0) > 0 ? [item] : [];
  // });

  const selectedData = data.flatMap((item) => {
    if (item.colors?.length) {
      return item.colors
        .filter((c) => c.selected > 0)
        .map((c) => ({
          ...item,
          name: `${item.name} - ${c.color}`,
          image: c.img,
          selectedColor: c.id,
          selected: c.selected,
          count: c.count,
        }));
    }

    return (item.selected ?? 0) > 0 ? [item] : [];
  });

  return (
    <Stack direction="column" spacing={1} sx={{}}>
      <Typography variant="caption" sx={{ color: "#A8B2BD" }}>
        {title.toLocaleUpperCase()}
      </Typography>

      {selectedData?.map((item: ProductType, index: number) => (
        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                width: 45,
                height: 45,
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={item?.image}
                alt="Satisfaction Badge"
                style={{ width: "35px", height: "35px", color: "#0AA288" }}
              />
            </Box>
            <Typography variant="body2">{item?.name}</Typography>
          </Stack>

          <Stack direction="row" spacing={2} sx={{ alignItems: "center" }}>
            {title.toUpperCase() !== "PLAN" && (
              <CountButtons
                count={item.count ?? 0}
                selected={item.selected ?? 0}
                // count={item?.count || 0}
                // count={
                //   item.colors?.length
                //     ? (item.colors.find(
                //         (c: { id: string }) => c.id === item.selectedColor,
                //       )?.count ?? 0)
                //     : (item.count ?? 0)
                // }
                // selected={
                //   item.colors?.length
                //     ? (item.colors.find(
                //         (c: { id: string }) => c.id === item.selectedColor,
                //       )?.selected ?? 0)
                //     : (item.selected ?? 0)
                // }
                // category={category}
                onClickAction={(action: "add" | "remove") => {
                  if (action === "remove") {
                    decreaseQuantity(
                      title?.toLowerCase() as ProductCategory,
                      item.id,
                      item.selectedColor,
                    );
                  } else {
                    increaseQuantity(
                      title?.toLowerCase() as ProductCategory,
                      item.id,
                      item.selectedColor,
                    );
                  }
                }}
                ButtonSx={{
                  bgcolor:
                    index % 2 === 0
                      ? theme.palette.background.paper
                      : "#F1F1F2",
                  color: "#575757",
                  border: index % 2 !== 0 ? "1px solid #CED6DE" : "none",
                }}
              />
            )}
            {item?.hasDiscount ? (
              <Stack direction="column" spacing={0} sx={{ alignItems: "end" }}>
                <Typography
                  variant="subtitle2"
                  sx={{
                    color: "#6F7882",
                    textDecoration: "line-through",
                    // textDecorationThickness: "2px",
                    fontWeight: 600,
                  }}
                >
                  ${item?.price?.toFixed(2)}
                </Typography>

                <Typography
                  variant="subtitle2"
                  // sx={{ fontWeight: 700 }}
                  color="primary"
                  sx={{ fontWeight: 600 }}
                >
                  ${item?.discountPrice?.toFixed(2)}
                </Typography>
              </Stack>
            ) : (
              <Typography
                variant="subtitle2"
                color="primary"
                sx={{ fontWeight: 600 }}
              >
                ${item?.price?.toFixed(2)}
              </Typography>
            )}
          </Stack>
        </Stack>
      ))}
      {/* <Divider style={{marginTop: "10px"}}/> */}
      <Divider sx={{ width: "100%" }} />
    </Stack>
  );
}
