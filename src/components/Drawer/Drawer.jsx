import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import HomeIcon from '@mui/icons-material/Home';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TimeToLeaveIcon from '@mui/icons-material/TimeToLeave';
import PersonIcon from '@mui/icons-material/Person';
import Divider from '@mui/material/Divider';
import { useNavigate } from 'react-router-dom';


const navItemStyle = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: 1,
  cursor: 'pointer',
  '&:hover': { bgcolor: 'primary.background' },
  padding: 1,
  borderRadius: '4px',
  '&:hover > svg': { color: 'primary.main', },
  '&:hover .MuiTypography-root': { color: 'primary.main' },
}

export default function MyDrawer({ open, toggleDrawer, handleOpenModel, handleLogout }) {
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  // navigate
  const navigate = useNavigate();

  return (
    <div>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box sx={{
          width: { xs: '70vw', sm: '50vw' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          pl: 2
        }}
          role="presentation"
          onClick={toggleDrawer(false)}
        >
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', width: '100%' }}>
            <IconButton color="primary">
              <CloseIcon />
            </IconButton>
          </Box>
          {user ? (
            <Box>
              <Avatar sx={{ width: '80px', height: '80px' }} alt={user?.displayName} src={user?.photoURL} />
              <Typography sx={{ mt: 1, fontWeight: 'bold' }} variant='h5'>{user?.displayName}</Typography>
              <Typography sx={{}} variant='body2'>{user?.email}</Typography>
            </Box>
          ) : (
            <Box>
              <Typography>Bạn chưa đăng nhập!!</Typography>
            </Box>
          )}

          <Box sx={{ mt: 2, display: 'flex', flexDirection: 'column', gap: 1, width: '100%', pr: 2 }}>
            <Box onClick={() => navigate('/')} sx={navItemStyle}>
              <HomeIcon />
              <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1'>Trang chủ</Typography>
            </Box>
            <Box onClick={() => navigate('/about')} sx={navItemStyle}>
              <PersonIcon />
              <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1'>Giới thiệu</Typography>
            </Box>
            <Box onClick={() => navigate('/item')} sx={navItemStyle}>
              <TimeToLeaveIcon />
              <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1'>Sản phẩm cho thuê</Typography>
            </Box>
            <Box onClick={() => navigate('/contact')} sx={navItemStyle}>
              <LocalPhoneIcon />
              <Typography sx={{ fontWeight: 'bold' }} variant='subtitle1'>Liên hệ</Typography>
            </Box>
          </Box>
          <Box sx={{ pr: 2, width: '100%', mt: 1 }}>
            <Divider sx={{ width: '100%', mb: 2 }} />
            {user ? (
              <Button onClick={() => handleLogout()} sx={{ color: 'white' }} fullWidth variant='contained'>Đăng xuất</Button>
            ) : (
              <Button onClick={() => handleOpenModel()} sx={{ color: 'white' }} fullWidth variant='contained'>Đăng nhập</Button>
            )}

          </Box>
        </Box>
      </Drawer>
    </div>
  );
}
