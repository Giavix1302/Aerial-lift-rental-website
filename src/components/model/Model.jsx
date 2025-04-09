import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState, useEffect } from 'react';
import Login from './Login';
import SignUp from './SignUp';
import CloseIcon from '@mui/icons-material/Close';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 450,
  bgcolor: 'white',
  minHeight: 200,
  paddingY: 1
};

export default function BasicModal({ open = false, handleClose, isModelLogin }) {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    setIsLogin(isModelLogin)
  }, [isModelLogin])

  const handleCloseModel = () => {
    handleClose();
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button onClick={() => handleClose()}><CloseIcon /></Button>
          </Box>
          {isLogin ? <Login handleCloseModel={handleCloseModel} /> : <SignUp handleCloseModel={handleCloseModel}/>}
          <Box sx={{ my: 2, }}>
            {isLogin ? (
              <Typography
                variant="body2"
                sx={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => setIsLogin(false)}
              >
                Bạn chưa có tài khoản? <Typography variant='span' sx={{ color: 'primary.main' }}>Đăng ký ngay</Typography>
              </Typography>
            ) : (
              <Typography
                variant="body2"
                sx={{ textAlign: 'center', cursor: 'pointer' }}
                onClick={() => setIsLogin(true)}
              >
                Bạn đã có tài khoản? <Typography variant='span' sx={{ color: 'primary.main' }}> Đăng nhập ngay</Typography>
              </Typography>
            )}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}