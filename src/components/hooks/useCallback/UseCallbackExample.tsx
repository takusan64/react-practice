import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseCallbackString } from './UseCallbackString'

const UseCallbackExmample = () => {

  return (
    <>
      <p>useCallback</p>
      <CodeHighlight code_str={UseCallbackString} />
    </>
  )
}

export default UseCallbackExmample