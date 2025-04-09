import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { setUser } from "../../redux/userSlide";
import { useState } from "react";

export default function SignUp({ handleCloseModel }) {

  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      setError("Vui lòng điền đầy đủ thông tin");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Email không đúng định dạng");
      return;
    }
    if (password.length < 6) {
      setError("Mật khẩu phải có ít nhất 6 ký tự");
      return;
    }
    if (password !== confirmPassword) {
      setError("Mật khẩu không khớp");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      dispatch(setUser({
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        phoneNumber: user.phoneNumber,
      }));
      handleCloseModel();
      console.log("Đăng ký thành công:", user);
    } catch (error) {
      console.error("Lỗi đăng ký:", error.code);
    }
  };

  return (
    <Box sx={{ padding: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
      <Typography variant="h4" sx={{ fontWeight: 'bold' }}>Đăng kí</Typography>
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
        label="Số điện thoại"
        size="small"
        variant="outlined"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
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
      <TextField
        fullWidth
        label="Nhập lại mật khẩu"
        size="small"
        variant="outlined"
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Box>
        <Button fullWidth onClick={handleRegister} variant="contained" sx={{ color: 'white' }} >Đăng kí</Button>
        <Typography variant="caption" sx={{ color: 'red' }}>{error}</Typography>
      </Box>
    </Box>
  );
}