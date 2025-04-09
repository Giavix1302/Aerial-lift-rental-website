import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from '@mui/material/Divider';
import GoogleIcon from '@mui/icons-material/Google';

import { signInWithEmailAndPassword, signInWithPopup  } from "firebase/auth";
import { auth, googleProvider } from "../../firebase.js";
import { useState } from "react";

export default function Login({ handleCloseModel }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");


  const handleLogin = async () => {
    if (!email || !password) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      handleCloseModel();
    } catch (error) {
      if (error.code === "auth/invalid-email") {
        setError("Email không đúng định dạng");
      } else if (error.code === "auth/invalid-credential") {
        setError("Email hoặc mật khẩu không đúng");
      }
    }
  }

  const handleLoginWithGoogle = async () => {
    try {
      const response = await signInWithPopup(auth, googleProvider);
      handleCloseModel();
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Đăng nhập</Typography>
      <TextField
        fullWidth
        label="Email"
        size="small"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        fullWidth
        label="Mật khẩu"
        size="small"
        variant="outlined"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Box>
        <Button fullWidth variant="contained" sx={{ color: 'white' }} onClick={() => handleLogin()} >Đăng nhập</Button>
        <Typography variant="caption" sx={{ color: 'red' }}>{error}</Typography>
      </Box>
      <Divider />
      <Button variant="outlined" startIcon={<GoogleIcon />} onClick={() => handleLoginWithGoogle()} >Đăng nhập với Google</Button>
    </Box>
  );
}