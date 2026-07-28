import { Box, Grid, Typography, useTheme } from "@mui/material";
import React from "react";

export default function ProductCard({cardData}: any) {
  const theme = useTheme();
  return (
    <Box
      sx={{ bgcolor: theme.palette.background.paper, p: 2, borderRadius: 2 }}
    >
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <img
            src={cardData.image}
            alt={cardData.name}
            style={{ width: "100%", borderRadius: 8 }}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body2">{cardData.name}</Typography>
          <Typography variant="caption" color="textDisabled" sx={{}}>{cardData.desc}</Typography>
          {/* <Typography variant="body2">Color: {cardData.defaultColor}</Typography> */}
          {/* <Typography variant="body2">Count: {cardData.count}</Typography> */}
          <Typography variant="body1">${cardData.price.toFixed(2)}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
