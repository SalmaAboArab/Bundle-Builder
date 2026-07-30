import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React from "react";
import ProductCard from "./product-card";
import CollapseContainer from "./collapse-container";
import {
  Apps,
  CameraRearOutlined,
  PentagonOutlined,
  SpeakerPhone,
} from "@mui/icons-material";
import { Cameras } from "./cameras-json";

export default function Builder() {
  const theme = useTheme();
  return (
    <Stack
      direction="column"
      spacing={1}
      // sx={{
      //   color: "black",
      // }}
    >
      <Collapse
        title="Choose your cameras"
        step={1}
        isOpen={true}
        icon={<CameraRearOutlined color="disabled" />}
        selected={true}
        selectedCount={2}
      />
      <Collapse
        title="Choose your plan"
        step={2}
        isOpen={false}
        icon={<PentagonOutlined color="disabled" />}
        selected={false}
      />
      <Collapse
        title="Choose your sensors"
        step={3}
        isOpen={false}
        icon={<SpeakerPhone color="disabled" />}
        selected={false}
      />
      <Collapse
        title="Add extra protection"
        step={4}
        isOpen={false}
        icon={<Apps color="disabled" />}
        selected={false}
      />
    </Stack>
  );
}

type CollapseProps = {
  title: string;
  step: number;
  isOpen: boolean;
  icon: React.ReactNode;
  selected: boolean;
} & (
  | {
      selected: true;
      selectedCount: number;
    }
  | {
      selected: false;
      selectedCount?: never;
    }
);

const Collapse = ({
  title,
  step,
  isOpen,
  icon,
  selected,
  selectedCount,
}: CollapseProps) => {
  return (
    <CollapseContainer
      icon={icon}
      {...(selected ? { selected: true, selectedCount } : { selected: false })}
      title={title}
      step={step}
      isOpen={isOpen}
    >
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "stretch", justifyContent: "center" }}
      >
        {Cameras.map((camera) => (
          <Grid
            key={camera.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 6 }}
            sx={{ display: "flex" }}
          >
            <ProductCard cardData={camera} />
          </Grid>
        ))}
      </Grid>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Button
          sx={{ mt: 2, textTransform: "none" }}
          variant="outlined"
          color="primary"
        >
          Next: Choose your plan
        </Button>
      </Box>
    </CollapseContainer>
  );
};
