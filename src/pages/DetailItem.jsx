import Header from "../components/Header";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Link from '@mui/material/Link';
import { useNavigate, useLocation } from "react-router-dom";

export default function DetailItem() {
  const navigate = useNavigate()
  const location = useLocation();
  const item = location.state.item
  console.log(item);
  return (
    <Box>
      <Header />
      <Container sx={{ marginTop: (theme) => theme.xeNangNguoi.headerHeight, py: 4 }}>
        <Breadcrumbs>
          <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Trang chủ</Typography>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>{item.name}</Typography>
        </Breadcrumbs>
        <Box sx={{mt: 2}}>
          <Box sx={{ width: '35%' }}>
            <img style={{ width: '100%', height: '500px', objectFit: 'cover' }} src={item.image} />
          </Box>
          <Box sx={{ width: '50%' }}>

          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}