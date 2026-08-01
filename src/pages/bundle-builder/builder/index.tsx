import { Box, Button, Grid, Stack, Typography, useTheme } from "@mui/material";
import React, { useState } from "react";
import ProductCard from "./product-card";
import CollapseContainer from "../../../shared-components/collapse-container";
import {
  Apps,
  CameraRearOutlined,
  PentagonOutlined,
  SpeakerPhone,
} from "@mui/icons-material";
import { ProductsNames } from "../../../json/global-json";
import type { ProductCategory, ProductType } from "../../../types/main-types";
import { useAppContext } from "../../../context/app-context";

export default function Builder() {
  const theme = useTheme();
  const [openStep, setOpenStep] = useState(1);
  const { Products } = useAppContext();
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
        icon={<CameraRearOutlined color="disabled" />}
        selected={true}
        selectedCount={2}
        data={Products?.cameras}
        // type="cameras"
        isOpen={openStep === 1}
        onToggle={(step: number) => {openStep === 1 && step === 1 ? setOpenStep(0) : setOpenStep(step)}}
      />
      <Collapse
        title="Choose your plan"
        step={2}
        icon={<PentagonOutlined color="disabled" />}
        selected={false}
        data={Products?.plan}
        // type="plan"
        isOpen={openStep === 2}
        onToggle={(step: number) => {openStep === 2  && step === 2 ? setOpenStep(0) : setOpenStep(step)}}
      />
      <Collapse
        title="Choose your sensors"
        step={3}
        icon={<SpeakerPhone color="disabled" />}
        selected={false}
        data={Products?.sensors}
        // type="sensors"
        isOpen={openStep === 3}
        onToggle={(step: number) => {openStep === 3  && step === 3 ? setOpenStep(0) : setOpenStep(step)}}
      />
      <Collapse
        title="Add extra protection"
        step={4}
        icon={<Apps color="disabled" />}
        selected={false}
        data={Products?.accessories}
        // type="accessories"
        isOpen={openStep === 4}
        onToggle={(step: number) => {openStep === 4  && step === 4 ? setOpenStep(0) : setOpenStep(step)}}
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
  data: any;
  // type: "cameras" | "plan" | "accessories" | "sensors";
  onToggle: (step: number) => void;
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
  data,
  // type,
  onToggle,
}: CollapseProps) => {
  return (
    <CollapseContainer
      icon={icon}
      {...(selected ? { selected: true, selectedCount } : { selected: false })}
      title={title}
      step={step}
      isOpen={isOpen}
      onToggle={()=>onToggle(step)}
    >
      <Grid
        container
        spacing={2}
        sx={{ alignItems: "stretch", justifyContent: "center" }}
      >
        {data?.map((item: ProductType) => (
          <Grid
            key={item?.id}
            size={{ xs: 12, sm: 6, md: 4, lg: 6 }}
            sx={{ display: "flex" }}
          >
            <ProductCard cardData={item} type={ProductsNames[step-1] as ProductCategory} />
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
        {step !== 4 && (
          <Button
          sx={{ mt: 2 }}
          variant="outlined"
          color="primary"
          onClick={() => onToggle(step+1)}
        >
          Next: Choose your {ProductsNames[step]}
        </Button>
        )}
      </Box>
    </CollapseContainer>
  );
};
