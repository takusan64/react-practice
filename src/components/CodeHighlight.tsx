import React from 'react'
import {
  Container
} from '@mui/material'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { dark } from 'react-syntax-highlighter/dist/cjs/styles/prism'

type CodeHighlightProp = {
  code_str: string
}

const CodeHighlight: React.FC<CodeHighlightProp> = ({ code_str }) => {
  const customCSS = {fontSize: "0.75em"}

  return (
    <>
      <Container maxWidth="md">
        <SyntaxHighlighter language="tsx" style={dark} customStyle={customCSS}>
          {code_str}
        </SyntaxHighlighter>
      </Container>
    </>
  )
}

export default CodeHighlight