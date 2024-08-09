import { Box, Container, Typography } from "@mui/material";
import react from "react";
import { BarChart } from "@mui/x-charts/BarChart";

function DataDesa() {
  return (
    <Container maxWidth="xl">
      <Typography
        variant="h1"
        align="center"
        sx={{ fontWeight: "bold", mt: "40px", fontSize: "70px" }}
      >
        {" "}
        Data Desa{" "}
      </Typography>
      <Typography
        variant="h3"
        align="center"
        sx={{ fontWeight: "Light", mt: "10px" }}
      >
        {" "}
        Kenali Desa Kalideres melalui Data{" "}
      </Typography>
      <Box
        sx={{
          mt: "30px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <BarChart
          title="Jumlah penduduk Desa Kalideres"
          xAxis={[{ scaleType: "band", data: ["2020", "2021", "2022"] }]}
          series={[{ data: [3712, 3835, 3887] }]}
          width={600}
          height={400}
        />
        <Box sx={{maxWidth : "50vw"}}>
          <Typography sx={{fontWeight : "bold", fontSize : "35px"}}>Jumlah penduduk</Typography>
          <Typography sx={{textAlign : "justify"}}>
            Jumlah penduduk Kalideres selama beberapa tahun terakhir mengalami
            peningkatan yang cukup signifikan. Pada tahun tertentu, penduduknya
            tercatat sebanyak 3.712 jiwa. Angka ini kemudian bertambah menjadi
            3.835 jiwa, menunjukkan pertumbuhan yang stabil. Pertumbuhan ini
            terus berlanjut hingga tahun 2022, di mana jumlah penduduk Kalideres
            mencapai 3.887 jiwa. Peningkatan ini mencerminkan adanya dinamika
            kependudukan di daerah tersebut, yang mungkin dipengaruhi oleh
            berbagai faktor seperti urbanisasi, migrasi, dan peningkatan
            kelahiran.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default DataDesa;
