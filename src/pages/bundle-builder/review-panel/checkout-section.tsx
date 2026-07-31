import { Box, Button, Chip, Link, Stack, Typography, useTheme } from '@mui/material';
import React from 'react'
import badge from "../../../assets/satisfaction-badge.png";
import delivery from "../../../assets/delivery_truck_speed.svg";
import { useToast } from '../../../hooks/useToast';

export default function CheckoutSection() {
    const theme = useTheme();
    const toast = useToast();
  return (
    <>
    <Stack direction="column" spacing={1} sx={{ pb: 2 }}>
          <Stack
          direction='row'
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
              <Stack direction='row' spacing={1} sx={{alignItems: 'center'}}>
                <Box sx={{width: 45, height: 45, bgcolor: theme.palette.background.paper, borderRadius: 1, display: 'flex', justifyContent: 'center', alignItems:'center'}}>
                <img
              src={delivery}
              alt="Satisfaction Badge"
              style={{ width: "35px", height: "35px", color: '#0AA288' }}
            />
              </Box>
              <Typography variant="body2">Fast Shipping</Typography>
              </Stack>
            <Stack direction="column" spacing={0} sx={{ alignItems: 'end' }}>
              <Typography
                variant="subtitle2"
                sx={{
                  color: "#6F7882",
                  textDecoration: "line-through",
                  textDecorationThickness: "2px",
                  fontSize: '14px',
                  // fontWeight: 'bold'
                }}
              >
                $5.99
                {/* ${cardData.price.toFixed(2)} */}
              </Typography>

              <Typography
                variant="subtitle2"
                // sx={{ fontWeight: 700 }}
                color="primary"
                sx={{fontSize: '14px', fontWeight: 'bold'}}
              >
                FREE
              </Typography>
            </Stack>
          </Stack>

          <Stack
          direction='row'
            spacing={2}
            sx={{ justifyContent: "space-between", alignItems: "center" }}
          >
            <img
              src={badge}
              alt="Satisfaction Badge"
              style={{ width: "78px", height: "78px" }}
            />
            <Stack spacing={0.5} sx={{alignItems: 'end'}}>
              <Chip
                label={
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "12px", letterSpacing: '-5%' }}
                  >
                    as low as $19.19/mo
                  </Typography>
                }
                color="primary"
                size="small"
                sx={{borderRadius: 1, p:0, m:0, minWidth:0, width: '125px'}}
              />
            <Stack direction="row" spacing={1} sx={{ alignItems: 'end' }}>
              <Typography
                variant="body1"
                sx={{
                  color: "#6F7882",
                  textDecoration: "line-through",
                  textDecorationThickness: "2px",
                  fontSize: '18px',
                  // fontWeight: 'bold'
                }}
              >
                $238.81
                {/* ${cardData.price.toFixed(2)} */}
              </Typography>

              <Typography
                variant="body1"
                // sx={{ fontWeight: 700 }}
                color="primary"
                sx={{fontSize: '24px', fontWeight: 'bold'}}
              >
                $187.89
                {/* ${cardData?.discountPrice?.toFixed(2)} */}
              </Typography>
            </Stack>
            </Stack>
          </Stack>

          <Typography
            variant="caption"
            sx={{ color: "#0AA288", textAlign: "center" }}
          >
            Congrats! You’re saving $50.92 on your security bundle!
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ width: "100%", fontWeight: 700 }}
            onClick={() => {
              toast.success("Success");
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
              fontStyle: 'italic'
            }}
          >
            Save my system for later
          </Link>
        </Stack>
    </>
  )
}
