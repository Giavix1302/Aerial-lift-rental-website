import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs'
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from "react-router-dom";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { keyToVietnamese } from "../../utils";

import DisplayImage from "./DisplayImage";

function getKeyValueArray(obj) {
  return Object.entries(obj).map(([key, value]) => ({ key, value }));
}

export default function DetailItem() {

  const navigate = useNavigate()
  const location = useLocation();
  const item = location.state.item
  console.log(item)

  const specificationSheet = getKeyValueArray(item);

  return (
    <Box>
      <Header />
      <Container sx={{ marginTop: (theme) => theme.xeNangNguoi.headerHeight, py: 2 }}>
        <Breadcrumbs>
          <Typography variant="h6" sx={{ cursor: 'pointer' }} onClick={() => navigate('/')}>Trang chủ</Typography>
          <Typography variant="h6" sx={{ color: 'text.primary' }}>{item.name}</Typography>
        </Breadcrumbs>
        <Box sx={{ mt: 2, display: 'flex', gap: 5, flexDirection: { xs: 'column', md: 'row' } }}>
          <Box sx={{ width: { xs: '100%', md: '35%', lg: '35%' } }}>
            <DisplayImage images={item.image} />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '65%', lg: '65%' }, p: 2 }}>
            <Typography sx={{ fontWeight: 'bold' }} variant="h4">{item.name}</Typography>
            <Typography variant="subtitle1" sx={{ mt: 2 }}>Bảng thông số chi tiết:</Typography>

            <TableContainer sx={{ mt: 1 }} component={Paper}>
              <Table sx={{}} size="small" aria-label="a dense table">
                <TableBody>
                  {specificationSheet.map((row) => {
                    let value = row.value
                    if (row.key === 'image' || row.key === 'id' || row.key === 'name' || row.key === 'description') return null
                    if (row.key === 'dimensions') {
                      value = `Dài: ${item.dimensions.length}, Rộng: ${item.dimensions.width}, Cao: ${item.dimensions.height}`
                    }
                    return (
                      <TableRow
                        key={row.key}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell sx={{ fontSize: '1rem', fontWeight: 'bold' }} component="th" scope="row">{keyToVietnamese(row.key)}</TableCell>
                        <TableCell sx={{ fontSize: '1rem' }} align="right">{value}</TableCell>
                      </TableRow>
                    )
                  })}
                </TableBody>
              </Table>
            </TableContainer>
            <Button variant="contained" sx={{ color: 'white', mt: 2 }}>Liên hệ để thuê xe</Button>
          </Box>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}