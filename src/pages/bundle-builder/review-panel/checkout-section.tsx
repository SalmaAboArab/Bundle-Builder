import {
  Box,
  Button,
  Chip,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import badge from "../../../assets/satisfaction-badge.png";
import delivery from "../../../assets/delivery_truck_speed.svg";
import { useToast } from "../../../hooks/useToast";
import { useAppContext } from "../../../context/app-context";

export default function CheckoutSection() {
  const theme = useTheme();
  const toast = useToast();
  const { subtotal, total, saving, Products } = useAppContext();
  return (
    <>
      <Stack direction="column" spacing={1} sx={{ pb: 2 }}>
        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
            <Box
              sx={{
                width: 45,
                height: 45,
                bgcolor: theme.palette.background.paper,
                borderRadius: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={delivery}
                alt="Satisfaction Badge"
                style={{ width: "35px", height: "35px", color: "#0AA288" }}
              />
            </Box>
            <Typography variant="body2">Fast Shipping</Typography>
          </Stack>
          <Stack direction="column" spacing={0} sx={{ alignItems: "end" }}>
            <Typography
              variant="subtitle2"
              sx={{
                color: "#6F7882",
                textDecoration: "line-through",
                textDecorationThickness: "2px",
                fontSize: "14px",
              }}
            >
              $5.99
            </Typography>

            <Typography
              variant="subtitle2"
              color="primary"
              sx={{ fontSize: "14px", fontWeight: "bold" }}
            >
              FREE
            </Typography>
          </Stack>
        </Stack>

        <Stack
          direction="row"
          spacing={2}
          sx={{ justifyContent: "space-between", alignItems: "center" }}
        >
          <img
            src={badge}
            alt="Satisfaction Badge"
            style={{ width: "78px", height: "78px" }}
          />
          <Stack spacing={0.5} sx={{ alignItems: "end" }}>
            <Chip
              label={
                <Typography
                  variant="caption"
                  sx={{ fontSize: "12px", letterSpacing: "-5%" }}
                >
                  as low as $19.19/mo
                </Typography>
              }
              color="primary"
              size="small"
              sx={{ borderRadius: 1, p: 0, m: 0, minWidth: 0, width: "125px" }}
            />
            <Stack direction="row" spacing={1} sx={{ alignItems: "end" }}>
              {subtotal !== total && (
                <Typography
                  variant="body1"
                  sx={{
                    color: "#6F7882",
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                    fontSize: "18px",
                  }}
                >
                  ${subtotal.toFixed(2)}
                </Typography>
              )}

              <Typography
                variant="body1"
                color="primary"
                sx={{ fontSize: "24px", fontWeight: "bold" }}
              >
                ${total.toFixed(2)}
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        {saving !== 0 && (
          <Typography
            variant="caption"
            sx={{ color: "#0AA288", textAlign: "center" }}
          >
            Congrats! You’re saving ${saving.toFixed(2)} on your security
            bundle!
          </Typography>
        )}

        <Button
          disabled={total === 0}
          variant="contained"
          size="large"
          sx={{ width: "100%", fontWeight: 700 }}
          onClick={() => {
            toast.success("Checkout completed!");
          }}
        >
          Checkout
        </Button>

        <Link
          color="#484848"
          variant="body2"
          sx={{
            textDecoration: "underlined",
            width: "100%",
            textAlign: "center",
            cursor: "pointer",
            fontStyle: "italic",
          }}
          onClick={() => {
            localStorage.setItem("savedProducts", JSON.stringify(Products));
            toast.success("System Saved Successfuly!");
          }}
        >
          Save my system for later
        </Link>
      </Stack>
    </>
  );
}
