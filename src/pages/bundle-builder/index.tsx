import { Box, Chip, Grid } from "@mui/material";
import React, { useState } from "react";
import Builder from "./builder";
import ReviewPanel from "./review-panel";
import type { SelectedTypes } from "./types/main-types";
import { Cameras } from "../../json/cameras-json";
import { Sensors } from "../../json/sensors-json";
import { Accessories } from "../../json/accessories-json";
import { Plans } from "../../json/plan-json";

/*
{
cameras: [],
sensors: [],
accessories: [],
plan: [],
}
*/

export default function BundleBuilder() {
  const [SelectedItems, setSelectedItems] = useState<any>({
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
  });
  console.log(SelectedItems.cameras[0].image);
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 12, lg: 8 }}>
        <Builder />
      </Grid>
      <Grid size={{ xs: 12, md: 12, lg: 4 }}>
        <ReviewPanel SelectedItems={SelectedItems}/>
      </Grid>
    </Grid>
  );
}
