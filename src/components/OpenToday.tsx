import { Box, Typography } from '@mui/material'
import styled from '@mui/system/styled'
import React from 'react'
import ScheduleIcon from '@mui/icons-material/Schedule';
import { useTheme } from '@mui/material/styles';

const OpenToday = () => {

  const theme = useTheme();

  const Container = styled(Box)({
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: `${theme.palette.primary.main}0d`,
    padding: '16px',
    borderTop: `3px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
    width: '100%',
  })

  return (
    <Container>
      <ScheduleIcon fontSize='large'/>
      <Typography variant='body1' sx={{ml: 3}}>
        Avoinna tänään: 7 - 19
      </Typography>
    </Container>
  )
}

export default OpenToday