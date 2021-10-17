import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseContextString } from './UseContextString'

const UseContextExmample = () => {

  return (
    <>
      <p>useContext</p>
      <CodeHighlight code_str={UseContextString} />
    </>
  )
}

export default UseContextExmample