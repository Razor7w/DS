import React, { FC } from 'react'
import PracticeOne from './practice-1'
import PracticeTwo from './practice-2'
import { Card, Stack, Typography } from '@mui/material'

const Home: FC = () => {
  return (
    <>
      <Card sx={{ m: 3, p: 3 }}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Ejercicio 1
        </Typography>
        <Stack direction="row" spacing={2}>
          <PracticeOne type={'1'} />
          <PracticeOne type={'2'} />
        </Stack>
      </Card>
      <Card sx={{ m: 3, p: 3 }}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Ejercicio 2
        </Typography>
        <PracticeTwo />
      </Card>
    </>
  )
}

export default Home
