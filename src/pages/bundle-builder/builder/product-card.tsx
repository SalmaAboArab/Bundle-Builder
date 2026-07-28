import {
  Box,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";

export default function ProductCard({ cardData }: any) {
  const theme = useTheme();
  return (
    <Box
      sx={{ bgcolor: theme.palette.background.paper, p: 2, borderRadius: 2 }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Stack direction="column" spacing={1} sx={{ alignItems: "center" }}>
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
                // sx={{height: "15px"}}
              />
            )}
            <img
              src={cardData.image}
              alt={cardData.name}
              style={{ width: "100%", borderRadius: 8 }}
            />
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body2">{cardData.name}</Typography>
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
            <Link sx={{cursor: "pointer" }}>
              Learn More
            </Link>
          </Typography>
          {/* <Typography variant="body2">Color: {cardData.defaultColor}</Typography> */}
          {cardData?.colors && cardData?.colors?.length > 0 && (
            <Stack
              direction="row"
              spacing={1}
              sx={{ mt: 1, alignItems: "center" }}
            >
              <Typography variant="body2">Color:</Typography>
              <Stack direction="row" spacing={1}>
                {cardData?.colors?.map((color: any, index: number) => (
                  <Box
                    key={index}
                    sx={{
                      width: 20,
                      height: 20,
                      borderRadius: "50%",
                      backgroundColor: color.color.toLowerCase(),
                      border:
                        color.color.toLowerCase() ===
                        cardData.defaultColor.toLowerCase()
                          ? `2px solid ${theme.palette.primary.main}`
                          : "1px solid #ccc",
                      cursor: "pointer",
                    }}
                  />
                ))}
              </Stack>
            </Stack>
          )}
          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Typography variant="body2">Count: {cardData.count}</Typography>
            {cardData.hasDiscount ? (
              <Stack direction="column" spacing={0} sx={{ mt: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "error.main",
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                  }}
                >
                  ${cardData.price.toFixed(2)}
                </Typography>

                <Typography
                  variant="subtitle1"
                  // sx={{ fontWeight: 700 }}
                  // color="error.main"
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
