import Box from "@mui/material/Box";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Slide from "../components/Slide";
import { Button, Container, Typography } from "@mui/material";
import Grid from '@mui/material/Grid';
import CardItem from "../components/CardItem";
import { data } from "../data";

export default function Home() {
  return (
    <Box>
      <Header />
      <Container
        sx={{ marginTop: (theme) => theme.xeNangNguoi.headerHeight }}
      >
        <Box sx={{ width: '100%', display: "flex", gap: 2, py: '20px', alignItems: 'center' }}>
          <Box sx={{ width: '50%' }}>
            <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>Cho thuê xe nâng người</Typography>
            <Typography component="li" variant="h6" >An toàn - Hiệu quả - Tiết kiệm</Typography>
            <Typography component="li" variant="h6" >Giải pháp nâng người tối ưu cho mọi công trình</Typography>
            <Typography component="li" variant="h6" >Thuê xe nâng người chuyên nghiệp, nhanh chóng và đáng tin cậy</Typography>
            <Button variant="contained" sx={{ color: 'white', fontWeight: 'bold', mt: 2 }}>Liên hệ ngay</Button>
          </Box>
          <Box sx={{ width: '50%' }}>
            <Slide />
          </Box>
        </Box>
        <Box sx={{ mt: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography variant="h3" sx={{ fontWeight: 'bold', color: 'primary.main', mb: 1 }}>Các sản phẩm nổi bật cho thuê</Typography>
          <Box sx={{ mt: '50px', width: '100%' }}>
            <Grid container spacing={2}>
              {data.map((item) => (
                <Grid key={item.id} size={{ xs: 12, sm: 6, md: 4 }} item>
                  <CardItem item={item} />
                </Grid>
              ))}
            </Grid>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}