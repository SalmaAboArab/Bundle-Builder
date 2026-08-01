import { Box, Divider, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import SelectedItemGroup from "./selected-item-group";
import CheckoutSection from "./checkout-section";
import { useAppContext } from "../../../context/app-context";
import styles from "./review-panel.module.css";

export default function ReviewPanel() {
  const theme = useTheme();
  const { selectedItems } = useAppContext();
  return (
    <Box sx={{ bgcolor: theme.palette.secondary.main, p: 2, borderRadius: 1, overflowY: "auto", maxHeight: "100vh" }} className={styles.scrollBarStyling}>
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
        {selectedItems?.cameras?.length > 0 && (
        <SelectedItemGroup title="cameras" data={selectedItems.cameras}/>
        )}
        {selectedItems?.sensors?.length > 0 && (
        <SelectedItemGroup title="sensors" data={selectedItems.sensors}/>
        )}
        {selectedItems?.accessories?.length > 0 && (
        <SelectedItemGroup title="accessories" data={selectedItems.accessories}/>
        )}
        {selectedItems?.plan?.length > 0 && (
        <SelectedItemGroup title="plan" data={selectedItems.plan}/>
        )}

        <CheckoutSection/>
      </Stack>
    </Box>
  );
}
