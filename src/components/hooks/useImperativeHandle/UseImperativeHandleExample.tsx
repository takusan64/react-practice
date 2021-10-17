import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseImperativeHandleString } from './UseImperativeHandleString'

const UseImperativeHandleExmample = () => {

  return (
    <>
      <p>useImperativeHandle</p>
      <CodeHighlight code_str={UseImperativeHandleString} />
    </>
  )
}

export default UseImperativeHandleExmample