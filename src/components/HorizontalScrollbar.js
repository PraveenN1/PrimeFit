import React from 'react'
import { Box } from '@mui/material'

import BodyPart from './BodyPart'

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart }) => {
    return (
      <div>
        {Array.isArray(data) ? (
          data.map((item) => (
            <Box
              key={item.id || item}
              itemId={item.id || item}
              title={item.id || item}
              m="0 40px"
            >
              <BodyPart
                item={item}
                bodyPart={bodyParts}
                setBodyPart={setBodyPart}
              />
            </Box>
          ))
        ) : (
          <p>Data is not an array.</p>
        )}
      </div>
    );
  };
  

export default HorizontalScrollbar;