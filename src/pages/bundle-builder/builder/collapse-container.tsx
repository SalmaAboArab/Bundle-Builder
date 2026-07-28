//
import React, { useState, type ReactNode } from "react";

import {
  Box,
  Grid,
  Button,
  Divider,
  Tooltip,
  Collapse,
  useTheme,
  Typography,
  IconButton,
} from "@mui/material";
import { ArrowDropUp } from "@mui/icons-material";

// import { Iconify } from '../iconify';

type Props = {
  children: ReactNode;
  title: string;
  icon: ReactNode;
  selected: boolean;
  step?: number;
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

export default function CollapseContainer({ children, title, icon, step, selected, selectedCount }: Props) {
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(true);

  const handleCollapseToggle = () => {
    setOpen(!open);
  };

  return (
    <Box component="div" sx={{ bgcolor: open ? theme.palette.secondary.main : "transparent", py: 1, borderRadius: 2 }}>
        <Typography variant="caption" gutterBottom sx={{ p: 2, color: theme.palette.text.secondary }}>
        Step {step} of 4
      </Typography>
      <Box
        sx={{
          width: "100%",
          mt: 0.5,
          borderTop: `0.5px solid #1F1F1F`,
          borderBottom: `0.5px solid #1F1F1F`,
          // borderRadius: 1,
          p: 2,
        }}
      >
        <Grid
          container
          spacing={1}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid
            size={{
              xs: 12,
              sm: 7,
              // sm: open ? 7 : 12,
              // md: open ? 9 : 12,
              // xl: open ? 10 : 12,
            }}
          >
            <Box
              component="div"
              sx={{
                display: "flex",
                alignItems: "center",
                flexDirection: "row",
                width: "100%",
                gap: 1,
              }}
            >
              {/* ///// */}

              <Box sx={{ display: "flex", alignItems: "center" }}>{icon}</Box>

              <Tooltip title={title} placement="top">
                <Typography
                  variant="h6"
                  sx={{
                    flexShrink: 0,
                    overflow: "hidden",
                    whiteSpace: "noWrap",
                    textOverflow: "ellipsis",
                    maxWidth: { sm: "50%", xs: "90%" },
                  }}
                >
                  {title}
                </Typography>
              </Tooltip>
              {/* <Box component="div" sx={{ flexGrow: 1, ml: 2, display: {sm: 'block', xs: 'none'} }}>
              <Divider />
            </Box> */}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 5 }} sx={{ textAlign: "right" }}>
            <Button
              onClick={handleCollapseToggle}
              variant="text"
              size="medium"
              sx={{
                textTransform: "none",
              }}
            >
              {selected && (
                <Typography variant="caption"> {selectedCount} selected</Typography>
              )}
              <ArrowDropUp
                sx={{
                  transform: !open ? "rotate(-180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </Button>
          </Grid>
        </Grid>
        <Collapse in={open} timeout="auto" unmountOnExit sx={{ pt: "24px" }}>
          {children}
        </Collapse>
      </Box>
    </Box>
  );
}
