import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import ProductCard from "./product-card";
import CollapseContainer from "./collapse-container";
import { CameraRearOutlined } from "@mui/icons-material";
import { Cameras } from "./json";

export default function Builder() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        // bgcolor: theme.palette.secondary.main,
        color: "black",
        // p: 2,
        borderRadius: 1,
      }}
    >
      {/* <Box sx={{ width: "100%", mt: 2 , borderTop: `1px solid ${theme.palette.divider}`, borderBottom: `1px solid ${theme.palette.divider}`, borderRadius: 1, p: 2}}> */}
      <CollapseContainer
        icon={<CameraRearOutlined color="disabled" />}
        selected
        selectedCount={2}
        title="Select Products"
        step={1}
      >
        <Grid container spacing={2} sx={{ justifyContent: "center", alignItems: "center" }}>
          {Cameras.map((camera) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 6 }} key={camera.id}>
              <ProductCard cardData={camera} />
            </Grid>
          ))}
        </Grid>
        <Box sx={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <Button sx={{ mt: 2, textTransform: "none" }} variant="outlined" color="primary">
            Next: Choose your plan
          </Button>
        </Box>
      </CollapseContainer>
      {/* </Box> */}
    </Box>
  );
}
