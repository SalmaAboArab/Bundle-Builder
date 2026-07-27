import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'

export default function Builder() {
    const theme = useTheme();
  return (
    <Box sx={{ bgcolor: theme.palette.secondary.main, color: 'black', p: 2, borderRadius: 1 }}>
        <Typography variant="h4" gutterBottom>
            Bundle Builder
        </Typography>
    </Box>
  )
}
