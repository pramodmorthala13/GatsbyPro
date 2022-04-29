import React from 'react'
import {ParagraphTextStyles} from '../../styles/typography/ParagraphTextStyles'

const ParagraphText = ({children,...props}) => {
  return (
    <ParagraphTextStyles>{children}</ParagraphTextStyles>
  )
}

export default ParagraphText