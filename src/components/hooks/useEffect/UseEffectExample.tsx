import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseEffectString } from './UseEffectString'

const UseEffectExmample = () => {

  return (
    <>
      <p>useEffect</p>
      <CodeHighlight code_str={UseEffectString} />
    </>
  )
}

export default UseEffectExmample