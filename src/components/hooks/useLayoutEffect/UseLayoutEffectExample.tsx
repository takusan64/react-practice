import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseLayoutEffectString } from './UseLayoutEffectString'

const UseLayoutEffectExmample = () => {

  return (
    <>
      <p>useLayoutEffect</p>
      <CodeHighlight code_str={UseLayoutEffectString} />
    </>
  )
}

export default UseLayoutEffectExmample