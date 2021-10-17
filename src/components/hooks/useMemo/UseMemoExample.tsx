import React, { useState } from 'react'
import CodeHighlight from 'components/CodeHighlight'
import {
  Container
} from '@mui/material'
import { UseMemoString } from './UseMemoString'

const UseMemoExmample = () => {

  return (
    <>
      <p>useMemo</p>
      <CodeHighlight code_str={UseMemoString} />
    </>
  )
}

export default UseMemoExmample