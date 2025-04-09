import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import logo from "../assets/logo_CTY_TNHH_ALV_VINA_2.png"
import Typography from "@mui/material/Typography";
import BasicModal from "./model/Model";
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState, useEffect } from "react";


import Logout from '@mui/icons-material/Logout';
import ListItemIcon from '@mui/material/ListItemIcon';
import InfoIcon from '@mui/icons-material/Info';

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase.js";
import { useDispatch, useSelector } from "react-redux";
import { clearUser, setUser } from "../redux/userSlide.js";


export default function Header() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  const [isModelLogin, setIsModalLogin] = useState(false);

  const [openModel, setOpenModel] = useState(false);
  const handleOpenModel = () => setOpenModel(true);
  const handleCloseModel = () => setOpenModel(false);

  const handleOpenLoginModel = () => {
    setIsModalLogin(true);
    handleOpenModel();
  }
  const handleOpenSignUpModel = () => {
    setIsModalLogin(false);
    handleOpenModel();
  }
  // kierm tra xem có người dùng đăng nhập hay không
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is signed in:", user);
        // Redirect to the home page or do something else
        dispatch(setUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          phoneNumber: user.phoneNumber,
        }));
      } else {
        dispatch(clearUser())
        console.log("No user is signed in.");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  // Xử lý đăng xuất
  const handleLogout = async () => {
    try {
      await signOut(auth);
      dispatch(clearUser());
      handleClose()
    } catch (error) {
      console.error("Lỗi khi đăng xuất:", error.message);
    }
  };

  //
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ width: "100vw", boxShadow: '1px 1px 10px rgba(0,0,0,0.1)', position: 'fixed', top: 0, zIndex: 100 }}>
      <Box sx={{
        height: (theme) => theme.xeNangNguoi.headerTopHeight,
        width: "100vw",
        bgcolor: "primary.main",
        justifyContent: "space-between",
        display: "flex",
        alignItems: "center",
        paddingX: { lg: 20, md: 10, sm: 5, xs: 2 },
      }}>
        <Link sx={{ color: "white", textDecoration: 'none' }}>Liên hệ: 0972296068</Link>

        {user ? (
          <Box>
            <Box
              sx={{ display: "flex", alignItems: "center", gap: 1 }}
              id="toggle-menu-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            >
              <Avatar sx={{ width: 30, height: 30 }} alt={user.displayName ? user.displayName : user.email} src={user.photoURL} />
              <Link sx={{ color: "white", textDecoration: 'none', cursor: 'pointer' }}>{user.displayName ? user.displayName : user.email}</Link>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              slotProps={{
                paper: {
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
                    '&::before': {
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
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <Typography sx={{ px: 2, py: 1, fontWeight: 'bold', color: 'primary.main' }}>
                Xin chào {user.displayName ? user.displayName : user.email}
              </Typography>
              <MenuItem >
                <ListItemIcon>
                  <InfoIcon fontSize="small" />
                </ListItemIcon>
                Thông tin cá nhân
              </MenuItem>
              <Divider />
              <MenuItem onClick={() => handleLogout()}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </Box>
        ) : (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link onClick={() => handleOpenLoginModel()} sx={{ color: "white", textDecoration: 'none', cursor: 'pointer' }}>Đăng nhập</Link>
            <Divider orientation="vertical" flexItem sx={{ borderColor: 'white' }} />
            <Link onClick={() => handleOpenSignUpModel()} sx={{ color: "white", textDecoration: 'none', cursor: 'pointer' }}>Đăng ký</Link>
          </Box>
        )}

      </Box>
      <Box sx={{
        height: (theme) => theme.xeNangNguoi.headerBottomHeight,
        width: "100vw",
        bgcolor: "white",
        display: "flex",
        justifyContent: 'space-between',
        alignItems: "center",
        paddingY: 2,
        paddingX: { lg: 20, md: 10, sm: 5, xs: 2 }
      }}>
        <img src={logo} alt="Logo" style={{ height: 80, padding: '4px' }} />
        <Box sx={{ display: "flex", gap: 5, alignItems: "center" }}>
          <Typography variant="h6" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Trang chủ</Typography>
          <Typography variant="h6" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Giới thiệu</Typography>
          <Typography variant="h6" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Sản phẩm cho thuê</Typography>
          <Typography variant="h6" sx={{ cursor: 'pointer', '&:hover': { color: 'primary.main' } }}>Liên hệ</Typography>
        </Box>
      </Box>
      <BasicModal open={openModel} handleClose={handleCloseModel} isModelLogin={isModelLogin} />
    </Box >
  );
}