import React from 'react'
import styled from 'styled-components'

import { TextArea } from 'serverless-design-system'

const TextAreaWithNoOutLine = styled(TextArea)`

::-webkit-input-placeholder { /* Chrome/Opera/Safari */
  color: #B6B6B6;
}
::-moz-placeholder { /* Firefox 19+ */
  color: #B6B6B6;
}
:-ms-input-placeholder { /* IE 10+ */
  color: #B6B6B6;
}
:-moz-placeholder { /* Firefox 18- */
  color: #B6B6B6;
}

resize:none;

opacity: 0.6;
  
&:focus {
  outline: none;
  opacity: 1;
  background-image: radial-gradient(red 85%, transparent 16%);
  background-size: 2px 100%;
  background-position: left;
  background-repeat: no-repeat;
}
`

export default (props) => (
  <TextAreaWithNoOutLine
    height='150px'
    width='100%'
    border='none'
    fontFamily='Serverless'
    fontSize={2}
    fontWeight='normal'
    lineHeight={4}
    letterSpacing='h2'
    color='gray.2'
    background='rgba(39, 39, 39, .05)'
    px='14.5px'
    py='10px'
    {...props}
  />
)
