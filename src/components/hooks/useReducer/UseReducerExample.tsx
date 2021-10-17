import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseReducerString } from './UseReducerString'

const UseReducerExmample = () => {

  return (
    <>
      <p>useReducer</p>
      <CodeHighlight code_str={UseReducerString} />
    </>
  )
}

export default UseReducerExmample