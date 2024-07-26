import react from "react";
import desaKalideres from "../../assets/img/desaKalideresCover.jpeg";
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
} from "@mui/material";
import placeHolder from "../../assets/img/istockphoto-1409329028-612x612.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";

function Home() {
  return (
    <div>
      <Container
        sx={{
          display: "flex",
          mt: "40px",
          justifyContent: "space-between",
          alignItems: "center",
        }}
        maxWidth="xl"
      >
        <Box sx={{ maxWidth: "40vw" }}>
          <Typography
            variant="h1"
            sx={{ fontWeight: "bold", fontSize: "32px" }}
          >
            Selamat Datang di Website Desa Kalideres
          </Typography>
          <Typography
            variant="h3"
            sx={{ fontSize: "25px", mt: "20px", textAlign: "justify" }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Typography>
        </Box>
        <Box>
          <img
            src={desaKalideres}
            style={{ maxWidth: "40vw", maxHeight: "70vh" }}
          ></img>
        </Box>
      </Container>
      <Box sx={{ backgroundColor: "#ededed", pb: "30px" }}>
        <Container maxWidth="xl" sx={{ mt: "30vh", pt: "10px" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              fontSize: "32px",
              mt: "40px",
              textAlign: "right",
            }}
          >
            Pariwisata
          </Typography>
          <Typography
            variant="h3"
            sx={{
              fontSize: "55px",
              mt: "50px",
              textAlign: "right",
              fontWeight: "light",
            }}
          >
            Temukan lokasi-lokasi menarik yang anda bisa kunjungi untuk menemani
            libur pekan anda
          </Typography>
          <Box
            sx={{
              mt: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Card sx={{ maxWidth: 345 }} data-aos="fade-up">
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
            <Card sx={{ maxWidth: 345 }}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={desaKalideres}
                  alt="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Waduk Kirota
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
          <Box>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", fontSize: "32px", mt: "40px" }}
            >
              Berita
            </Typography>
            <Typography
              variant="h3"
              sx={{
                fontSize: "55px",
                mt: "30px",
                textAlign: "justify",
                fontWeight: "light",
                maxWidth: "50vw",
              }}
            >
              Berita terbaru seputar Desa Kalideres
            </Typography>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img src={placeHolder} style={{ maxHeight: "100px" }}></img>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Title
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img src={placeHolder} style={{ maxHeight: "100px" }}></img>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Title
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  gap: "50px",
                  backgroundColor: "white",
                  pt: "10px",
                  pb: "10px",
                  pl: "10px",
                  pr: "10px",
                  mt: "20px",
                  borderRadius: "10px",
                  "&:hover": {
                    cursor: "pointer",
                  },
                }}
              >
                <img src={placeHolder} style={{ maxHeight: "100px" }}></img>
                <Box>
                  <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                    Title
                  </Typography>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
      <Container maxWidth="xl" sx={{ mt: "50px", pt: "10px" }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: "bold",
            fontSize: "32px",
            mt: "40px",
            textAlign: "center",
          }}
        >
          UMKM
        </Typography>
        <Box
          sx={{ display: "flex", flexWrap: "wrap", gap: "30px", mt: "40px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={desaKalideres}
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Waduk Kirota
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
