import {
  Box,
  ButtonBase,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CountButtons from "../../../shared-components/count-buttons";
import type { ColorsType, ProductType } from "../../../types/main-types";
import { useAppContext } from "../../../context/app-context";

export default function ProductCard({
  cardData,
  type,
}: {
  cardData: ProductType;
  type: "cameras" | "plan" | "accessories" | "sensors";
}) {
  const theme = useTheme();
  const { changeVariant, increaseQuantity, decreaseQuantity, selectPlan } =
    useAppContext();
  const isSelected = cardData?.colors?.length
    ? cardData.colors.some((color: ColorsType) => color.selected > 0)
    : (cardData?.selected ?? 0) > 0;

  return (
    <Box
      sx={{
        bgcolor: theme.palette.background.paper,
        p: 1.5,
        borderRadius: 2,
        width: "100%",
        display: "flex",
        border: isSelected ? `2px solid ${theme.palette.primary.main}` : "none",
        ":hover": {
          boxShadow: 1,
          cursor: "pointer",
        },
      }}
      onClick={() => {
        if (type === "plan") selectPlan(cardData.id);
      }}
    >
      <Grid container spacing={2} sx={{ alignItems: "center" }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction="column" spacing={1}>
            {cardData.hasDiscount && (
              <Chip
                label={
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "12px", fontWeight: 400, letterSpacing: 0 }}
                  >
                    Save {cardData.discountPercentage}%
                  </Typography>
                }
                color="primary"
                size="small"
                sx={{ width: "80px" }}
              />
            )}
            <Box>
              <img
                src={cardData?.image}
                alt={cardData?.name}
                style={{ width: "100%", height: "100%", borderRadius: 8 }}
              />
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body2">{cardData?.name}</Typography>
          <Typography
            variant="caption"
            color="textDisabled"
            sx={{
              display: "block",
              lineHeight: 1.5,
              mt: 1,
            }}
          >
            {cardData.desc} &nbsp;
            <Link sx={{ cursor: "pointer" }}>Learn More</Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              my: 1,
            }}
          >
            {cardData?.colors?.map((option: any) => (
              <ButtonBase
                onClick={() => changeVariant(type, cardData.id, option.id)}
                sx={{
                  px: 0.5,
                  border:
                    cardData.selectedColor === option.id
                      ? `1px solid ${theme.palette.primary.main}`
                      : "0.5px solid #CCCCCC",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  transition: "all .2s",

                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box
                  component="img"
                  src={option.img}
                  alt={option.color}
                  sx={{
                    width: 25,
                    height: 25,
                    objectFit: "contain",
                  }}
                />

                <Typography variant="caption">{option.color}</Typography>
              </ButtonBase>
            ))}
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            {type !== "plan" && (
              <CountButtons
                count={
                  cardData.colors?.length
                    ? (cardData.colors.find(
                        (c: { id: string }) => c.id === cardData.selectedColor,
                      )?.count ?? 0)
                    : (cardData.count ?? 0)
                }
                selected={
                  cardData.colors?.length
                    ? (cardData.colors.find(
                        (c: { id: string }) => c.id === cardData.selectedColor,
                      )?.selected ?? 0)
                    : (cardData.selected ?? 0)
                }
                onClickAction={(action) => {
                  if (action === "add") {
                    increaseQuantity(type, cardData.id, cardData.selectedColor);
                  }

                  if (action === "remove") {
                    decreaseQuantity(type, cardData.id, cardData.selectedColor);
                  }
                }}
              />
            )}
            {cardData.hasDiscount ? (
              <Stack direction="column" spacing={0} sx={{ mt: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "error.main",
                    textDecoration: "line-through",
                    // textDecorationThickness: "2px",
                  }}
                >
                  ${cardData.price.toFixed(2)}
                </Typography>

                <Typography
                  variant="subtitle1"
                >
                  ${cardData?.discountPrice?.toFixed(2)}
                </Typography>
              </Stack>
            ) : (
              <Typography variant="subtitle1">
                ${cardData.price.toFixed(2)}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
