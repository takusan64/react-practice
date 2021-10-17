import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseRefString } from './UseRefString'

const UseRefExmample = () => {

  return (
    <>
      <p>useRef</p>
      <CodeHighlight code_str={UseRefString} />
    </>
  )
}

export default UseRefExmample