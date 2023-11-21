import React from 'react'
import type { FC, ReactNode } from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

interface Props {
  children?: ReactNode
}

export const Layout: FC<Props> = props => {
  const { children } = props

  return <Box component="main">{children}</Box>
}

Layout.propTypes = {
  children: PropTypes.node
}
