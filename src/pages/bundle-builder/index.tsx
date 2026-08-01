import { Grid } from "@mui/material";
import Builder from "./builder";
import ReviewPanel from "./review-panel";

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
