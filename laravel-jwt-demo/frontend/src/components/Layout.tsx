import Box from '@mui/material/Box';
import React, { ReactNode } from 'react'

interface PageContainerProps {
    children: ReactNode;
  }

  const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
    return <div className='w-10/12 m-auto' style={{background : 'white'}} >  
    
    <Box sx={{ bgcolor: 'background.default' }} > {children}</Box>
    
   </div>;
  };
  
  export default PageContainer;