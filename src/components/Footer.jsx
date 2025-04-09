import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useEffect } from "react";
import FacebookPagePlugin from "./FacebookPagePlugin";
import Chip from '@mui/material/Chip';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationPinIcon from '@mui/icons-material/LocationPin';
import { Link } from "@mui/material";
import Divider from '@mui/material/Divider';

export default function Footer() {
  useEffect(() => {
    if (window.FB) {
      window.FB.XFBML.parse();
    }
  }, []);
  return (
    <Box>
      <Box sx={{
        backgroundColor: "#262626",
        paddingX: { lg: 20, md: 10, sm: 5, xs: 2 },
        paddingY: 4,
        display: "flex",
        flexDirection: { lg: "row", md: "row", sm: "column", xs: "column" },
        justifyContent: "space-between",
        gap: { xl: 10, lg: 6, md: 5, sm: 2, xs: 1 },
      }}>
        <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <Typography variant="h5" sx={{ color: 'primary.main' }}>CÔNG TY TNHH ALV VINA 2</Typography>
          <Typography variant="body" sx={{ color: 'white', pb: 2 }}>Chi nhánh Daklak</Typography>
          <Typography variant="span" sx={{ color: 'white' }}>CÔNG TY TNHH ALV VINA 2 - Chi nhánh Đắk Lắk chuyên cung cấp dịch vụ cho thuê xe nâng người chính hãng. Chúng tôi cam kết mang đến sản phẩm chất lượng, an toàn, hiệu quả với chi phí tối ưu. Với đội ngũ kỹ thuật giàu kinh nghiệm cho thuê luôn nhanh chóng, chuyên nghiệp. ALV VINA 2 - Đắk Lắk đồng hành cùng doanh nghiệp, nâng cao hiệu suất làm việc! 🚀</Typography>
          <Box mt={4}>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", pb: 2 }}>
              <MailOutlineIcon sx={{ color: 'primary.main' }} />
              <Link sx={{ textDecoration: 'none' }} href="mailto: nguyenhoanggiavi123@gmail.com">nguyenhoanggiavi123@gmail.com</Link>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", pb: 2 }}>
              <PhoneIcon sx={{ color: 'primary.main' }} />
              <Link sx={{ textDecoration: 'none' }} href="tel: 097654321">097654321</Link>
            </Box>
            <Box sx={{ display: "flex", gap: 1, alignItems: "center", pb: 2 }}>
              <LocationPinIcon sx={{ color: 'primary.main' }} />
              <Link sx={{ textDecoration: 'none' }} target="_blank" href="https://www.google.com/maps/place/11%C2%B000'51.7%22N+106%C2%B050'25.7%22E/@11.0145484,106.8399338,16.06z/data=!4m4!3m3!8m2!3d11.014356!4d106.840457?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D">Ấp 5, xã Thạnh Phú, huyện Vĩnh Cửu</Link>
            </Box>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: 'primary.main', pb: 2 }}>Danh mục</Typography>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, paddingY: 2 }}>
            <Typography variant="body" sx={{ color: 'white', '&:hover': { cursor: 'pointer', color: 'primary.main' } }}>Giới thiệu</Typography>
            <Typography variant="body" sx={{ color: 'white', '&:hover': { cursor: 'pointer', color: 'primary.main' } }}>Sản phẩm cho thuê</Typography>
            <Typography variant="body" sx={{ color: 'white', '&:hover': { cursor: 'pointer', color: 'primary.main' } }}>Liên hệ</Typography>
          </Box>
        </Box>
        <Box>
          <Typography variant="h5" sx={{ color: 'primary.main', pb: 2 }}>Theo dõi chúng tôi</Typography>
          <Box>
            <Box>
              <Typography
                variant="body"
                sx={{ color: 'white' }}
              >
                Fanpage Facebook
              </Typography>
              <FacebookPagePlugin />
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: 'primary.main' }} />
      <Box sx={{ backgroundColor: "#262626", py: 2 }} >
        <Typography sx={{ color: 'white', textAlign: 'center' }}>Bản quyền thuộc về công ty THHH TM DV ALV VINA 2 - Chi nhánh Daklak</Typography>
      </Box>
    </Box>
  )
}