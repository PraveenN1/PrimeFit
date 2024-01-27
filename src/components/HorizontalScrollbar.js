import React from 'react'
import { Box } from '@mui/material'

const HorizontalScrollbar = ({data}) => {
  return (
    <div>
        {data.map((item)=> 
        <Box
            key={item.id || item}
            itemId={item.id || id}
            title={item.id || id}
            m="0 40px">
        </Box>
        
        )}
    </div>
  )
}

export default HorizontalScrollbar