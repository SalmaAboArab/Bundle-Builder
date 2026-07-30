import { Add, Remove } from "@mui/icons-material";
import {
  Box,
  Button,
  ButtonBase,
  Chip,
  Grid,
  Link,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import CountButtons from "../../../shared-components/count-buttons";

export default function ProductCard({ cardData }: any) {
  const theme = useTheme();
  return (
    <Box
      sx={{ bgcolor: theme.palette.background.paper, p: 2, borderRadius: 2, width: '100%', display: 'flex', }}
    >
      <Grid container spacing={2} sx={{alignItems: 'center'}}>
        <Grid size={{ xs: 12, md: 4 }} 
        // sx={{width: '100%', height:'100%'}}
        >
          <Stack direction="column" spacing={1} 
          // sx={{width: '100%', height:'100%'}}
          >
            {cardData.hasDiscount && (
              <Chip
                label={
                  <Typography
                    variant="caption"
                    sx={{ fontSize: "12px", fontWeight: 400, letterSpacing: 0 }}
                  >
                    Save {cardData.discountPercentage}%
                  </Typography>
                }
                color="primary"
                size="small"
                sx={{width: '80px'}}
              />
            )}
            <Box 
            // sx={{width: '100%', height:'70%'}}
            >
            <img
              src={cardData.image}
              alt={cardData.name}
              style={{ width: "100%", height: '100%', borderRadius: 8 }}
            />
            </Box>
          </Stack>
        </Grid>
        <Grid size={{ xs: 12, md: 8 }}>
          <Typography variant="body2">{cardData.name}</Typography>
          <Typography
            variant="caption"
            color="textDisabled"
            sx={{
              display: "block",
              lineHeight: 1.5,
              mt: 1,
            }}
          >
            {cardData.desc} &nbsp;
            <Link sx={{ cursor: "pointer" }}>Learn More</Link>
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 1,
              my: 1,
            }}
          >
            {cardData?.colors?.map((option: any) => (
              <ButtonBase
                // onClick={() => setSelected(option.color)}
                sx={{
                  // width: "100%",
                  px: 0.5,
                  border: "0.5px solid #CCCCCC",
                  // borderColor: "primary.main",
                  //   selected === option.color ? "primary.main" : "divider",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  // gap: 0.3,
                  transition: "all .2s",

                  "&:hover": {
                    borderColor: "primary.main",
                  },
                }}
              >
                <Box
                  component="img"
                  src={option.img}
                  alt={option.color}
                  sx={{
                    width: 25,
                    height: 25,
                    objectFit: "contain",
                  }}
                />

                <Typography variant="caption">{option.color}</Typography>
              </ButtonBase>
            ))}
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              mt: 1,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <CountButtons count={cardData.count} onClickAction={(action: 'add' | 'remove')=>{}}/>
            {cardData.hasDiscount ? (
              <Stack direction="column" spacing={0} sx={{ mt: 1 }}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: "error.main",
                    textDecoration: "line-through",
                    textDecorationThickness: "2px",
                  }}
                >
                  ${cardData.price.toFixed(2)}
                </Typography>

                <Typography
                  variant="subtitle1"
                  // sx={{ fontWeight: 700 }}
                  // color="error.main"
                >
                  ${cardData?.discountPrice?.toFixed(2)}
                </Typography>
              </Stack>
            ) : (
              <Typography variant="subtitle1">
                ${cardData.price.toFixed(2)}
              </Typography>
            )}
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
}
