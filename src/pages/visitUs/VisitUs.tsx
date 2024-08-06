import { Container, Typography, Box } from "@mui/material";
import react from "react";
import balaidesa from "../../assets/img/BalaiDesa.png";

function VisitUs() {
  const handleNavigate = () => {
    window.open("https://maps.app.goo.gl/s8gZBRobEm2smzZc7", "_blank");
  };
  return (
    <div>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontWeight: "bold", mt: "50px" }}
          >
            Visit US!
          </Typography>
          <Typography
            variant="h3"
            align="center"
            sx={{ mt: "30px", fontWeight: "light", fontSize: "35px" }}
          >
            Cari tahu alamat kantor serta untuk kemudahan mendapatkan informasi
            seputar Desa Kalideres
          </Typography>
        </Box>
        <Box
          sx={{
            mt: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src={balaidesa} alt="Balai Desa" style={{ width: "50%" }} onClick={handleNavigate} />

          <Box>
            <Typography
              variant="h2"
              sx={{ fontSize: "40px", fontWeight: "bold" }}
            >
              Alamat dan Kontak
            </Typography>
            <Typography
              variant="h3"
              sx={{ fontSize: "25px", fontWeight: "light", mt: "30px" }}
            >
              Kalideres, Kec. Kaliwedi, Kabupaten Cirebon, Jawa Barat 45165
            </Typography>
          </Box>
        </Box>
      </Container>
      <Box sx={{ height: "100px" }}></Box>
    </div>
  );
}

export default VisitUs;
