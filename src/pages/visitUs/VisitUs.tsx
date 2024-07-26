import { Container, Typography, Box } from "@mui/material";
import react from "react";

function VisitUs() {
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
          <Box
            sx={{
              height: "500px",
              width: "700px",
              backgroundColor: "black",
              borderRadius: "20px",
            }}
          ></Box>
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
    </div>
  );
}

export default VisitUs;
