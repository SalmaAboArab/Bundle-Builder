import { Add, Remove } from "@mui/icons-material";
import { Button, Stack, Typography, type SxProps } from "@mui/material";
import type { Theme } from "@mui/material/styles";
import React from "react";

type CountButtonsProps = {
  count: number;
  onClickAction: (action: "add" | "remove") => void;
  ButtonSx?: SxProps<Theme>;
};

export default function CountButtons({count, onClickAction, ButtonSx}:CountButtonsProps) {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <Button
        size="small"
        color="inherit"
        disabled={count===0}
        sx={{
          p: 0.5,
          bgcolor: count > 0 ? '#F0F4F7' : 'transparent',
          border: count === 0 ? "2px solid #E6EBF0" : 'none',
          width: "20px",
          height: "20px",
          borderRadius: 1,
          minWidth: 0,
          ...ButtonSx
        }}
        onClick={()=> onClickAction('remove')}
      >
        <Remove sx={{ width: "15px", height: "15px",  }} />
      </Button>
      <Typography variant="body2" sx={{fontSize: '16px'}}>{count}</Typography>
      <Button
        size="small"
        color="inherit"
        sx={{
          p: 0.5,
          bgcolor: "#F0F4F7",
          width: "20px",
          height: "20px",
          borderRadius: 1,
          minWidth: 0,
          ...ButtonSx,
        }}
        onClick={()=> onClickAction('add')}
      >
        <Add sx={{ width: "15px", height: "15px", color: "#525963" }} />
      </Button>
    </Stack>
  );
}
