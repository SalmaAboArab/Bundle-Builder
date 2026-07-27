import { Box, Chip, Grid } from '@mui/material'
import React from 'react'
import Builder from './builder'

export default function BundleBuilder() {
  return (
    <Grid container spacing={2}>
        <Grid size={{xs: 12, md: 8}}>
            <Builder/>
        </Grid>
        <Grid size={{xs: 12, md: 4}}>
            <Box sx={{ bgcolor: 'primary.main', color: 'white', p: 2, borderRadius: 1 }}>
                <p>Bundle Builder is a tool that allows you to create custom bundles of products. You can select the products you want to include in your bundle and set the price for the bundle.</p>
            </Box>
        </Grid>
    </Grid>
  )
}
