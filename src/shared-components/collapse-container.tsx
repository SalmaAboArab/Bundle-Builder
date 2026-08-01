//
import React, { useState, type ReactNode } from "react";

import {
  Box,
  Grid,
  Button,
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
  isOpen?: boolean;
  onToggle: () => void;
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

export default function CollapseContainer({
  children,
  title,
  icon,
  step,
  selected,
  selectedCount,
  isOpen,
  onToggle,
}: Props) {
  const theme = useTheme();

  return (
    <Box
      component="div"
      sx={{
        bgcolor: isOpen ? theme.palette.secondary.main : "transparent",
        borderRadius: 2,
      }}
    >
      <Typography
        variant="caption"
        gutterBottom
        sx={{ p: 2, color: theme.palette.text.secondary }}
      >
        Step {step} of 4
      </Typography>
      <Box
        sx={{
          width: "100%",
          mt: 0.5,
          borderTop: `0.5px solid #1F1F1F`,
          borderBottom: isOpen ? `` : `0.5px solid #1F1F1F`,
          // borderRadius: 1,
          p: 2,
        }}
      >
        <Grid
          container
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Grid
            size={{
              xs: 8,
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
            </Box>
          </Grid>

          <Grid size={{ xs: 4 }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
                // gap: 0.3,
                color: theme.palette.primary.main,
              }}
            >
            {selected && isOpen && (
              <Typography variant="caption" onClick={onToggle} sx={{cursor: "pointer"}}>
                {selectedCount} {window.innerWidth < 400 ? "Sel" : "Selected"}
              </Typography>
            )}
            <IconButton
              onClick={onToggle}
              // variant="text"
              size="small"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
              color="primary"
            >

              <ArrowDropUp
                sx={{
                  transform: !isOpen ? "rotate(-180deg)" : "rotate(0deg)",
                  transition: "transform 0.3s ease-in-out",
                }}
              />
            </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Collapse in={isOpen} timeout="auto" unmountOnExit sx={{ pt: "24px" }}>
          {children}
        </Collapse>
      </Box>
    </Box>
  );
}
