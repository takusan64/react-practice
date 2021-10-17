import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseStateString } from './UseStateString'

const UseStateExmample = () => {

  return (
    <>
      <p>useState</p>
      <CodeHighlight code_str={UseStateString} />
    </>
  )
}

export default UseStateExmample