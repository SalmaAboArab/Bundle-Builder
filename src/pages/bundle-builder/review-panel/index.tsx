import { Box, Button, Chip, Divider, Link, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import SelectedItemGroup from "./selected-item-group";
import CheckoutSection from "./checkout-section";
import type { SelectedTypes } from "../types/main-types";

export default function ReviewPanel({SelectedItems}:{SelectedItems: SelectedTypes}) {
  const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.secondary.main, p: 2, borderRadius: 1 }}>
      <Typography
        variant="caption"
        // gutterBottom
        sx={{ color: "#484848" }}
      >
        REVIEW
      </Typography>

      <Typography
        variant="h6"
        sx={{
          flexShrink: 0,
          overflow: "hidden",
          mt: 1,
          // whiteSpace: "noWrap",
          // textOverflow: "ellipsis",
          // maxWidth: { sm: "50%", xs: "90%" },
        }}
      >
        Your security system
      </Typography>
      <Typography variant="body2" sx={{ color: "#484848", mb: 1 }}>
        Review your personalized protection system designed to keep what matters
        most safe.
      </Typography>

      <Divider sx={{width: '100%', mb: 2}}/>

      <Stack direction="column" spacing={2}>
        {SelectedItems?.cameras?.length > 0 && (
        <SelectedItemGroup title="CAMERAS" data={SelectedItems.cameras}/>
        )}
        {SelectedItems?.sensors?.length > 0 && (
        <SelectedItemGroup title="SENSORS" data={SelectedItems.sensors}/>
        )}
        {SelectedItems?.accessories?.length > 0 && (
        <SelectedItemGroup title="ACCESSORIES" data={SelectedItems.accessories}/>
        )}
        {SelectedItems?.plan?.length > 0 && (
        <SelectedItemGroup title="PLAN" data={SelectedItems.plan}/>
        )}

        <CheckoutSection/>
      </Stack>
    </Box>
  );
}
