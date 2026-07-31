import { Box, Chip, Grid } from "@mui/material";
import React, { useState } from "react";
import Builder from "./builder";
import ReviewPanel from "./review-panel";
import type { SelectedTypes } from "../../types/main-types";
import { Cameras } from "../../json/cameras-json";
import { Sensors } from "../../json/sensors-json";
import { Accessories } from "../../json/accessories-json";
import { Plans } from "../../json/plan-json";
import { useAppContext } from "../../context/app-context";

/*
{
cameras: [],
sensors: [],
accessories: [],
plan: [],
}
*/

export default function BundleBuilder() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 12, lg: 8 }}>
        <Builder />
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 4 }}>
        <ReviewPanel/>
      </Grid>
    </Grid>
  );
}
