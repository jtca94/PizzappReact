
import { Container, Grid, IconButton, Link, Typography } from "@mui/material";
import { Facebook, GitHub, Instagram, Twitter, WhatsApp } from "@mui/icons-material";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#03071E", color: "#fff", padding: "2rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body1" gutterBottom>
              123 Main St, Anytown USA 12345
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: (123) 456-7890
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: info@mammamia.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <IconButton href="https://www.facebook.com/" target="_blank" style={{ color: "#fff" }}>
              <Facebook />
            </IconButton>
            <IconButton href="https://github.com/" target="_blank" style={{ color: "#fff" }}>
              <GitHub />
            </IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank" style={{ color: "#fff" }}>
              <Instagram />
            </IconButton>
            <IconButton href="https://twitter.com/" target="_blank" style={{ color: "#fff" }}>
              <Twitter />
            </IconButton>
            <IconButton href="https://api.whatsapp.com/send?phone=1234567890" target="_blank" style={{ color: "#fff" }}>
              <WhatsApp />
            </IconButton>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body2" align="center">
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                About Us
              </Link>
              {' | '}
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Privacy
              </Link>
              {' | '}
              <Link href="#" style={{ color: "#fff", textDecoration: "none" }}>
                Copyright
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

export default Footer;
