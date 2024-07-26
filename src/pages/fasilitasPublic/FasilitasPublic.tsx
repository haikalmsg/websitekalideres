import { Box, Container } from "@mui/material";
import react from "react";
import Typography from "@mui/material/Typography";
import placeHolder from "../../assets/img/istockphoto-1409329028-612x612.jpg";

function FasilitasPublic() {
  return (
    <div>
      <Container maxWidth="xl">
        <Box>
          <Typography
            variant="h1"
            align="center"
            sx={{ fontWeight: "bold", mt: "50px", fontSize: "50px" }}
          >
            Fasilitas Umum
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            mt: "50px",
            gap: "50px",
            border: "1px solid gray",
            p: "25px",
            borderRadius: "10px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <img src={placeHolder} style={{ maxHeight: "250px" }}></img>
          <Box>
            <Typography variant="h3" sx={{ fontWeight: "bold" }}>
              Balai Desa
            </Typography>
            <Typography sx={{ fontSize: "20px", mt: "10px" }}>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Typography>
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default FasilitasPublic;
