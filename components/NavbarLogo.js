import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import { Link } from 'next/link'
import Image from 'next/image'
import Home from '../pages';
import Logo from '../public/KaabaLogo.jpg'

export default function NavbarLogo() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = () => {
    
  };

  
   
  return (
    <React.Fragment>

      <br/>
      <Box sx={{ justifyContent: 'left', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        
         <a className='logo'>
        <Image
         src={Logo}
         alt="Home"
         width={50}
         height={50}
        >
        </Image>
        </a>
      Hajj
      </Box>
      
      <Menu
        anchorEl={anchorEl}
        id="home"
        onClick={handleClick}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&:before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        
      </Menu>
    </React.Fragment>
  );
}

