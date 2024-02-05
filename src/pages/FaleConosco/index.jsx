import TextField from "@mui/material/TextField";
import styles from "./FaleConosco.module.css";
import Button from "@mui/material/Button";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import YouTubeIcon from "@mui/icons-material/YouTube";
function FaleConosco() {
  return (
    <>
      <div className={styles.container}>
        <h1>Fale Conosco!</h1>
        <div className={styles.elementos}>
          <div className={styles.mapa}>
            <iframe
              width="620"
              height="500"
              frameborder="0"
              marginheight="0"
              id="gmap_canvas"
              src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=%20S%C3%A3o%20Paulo+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
            <script
              type="text/javascript"
              src="https://embedmaps.com/google-maps-authorization/script.js?id=524f0546ba0f32c2ad52714ef92eefedaf086474"
            ></script>
          </div>
          <div className={styles.formulario}>
            <h1 style={{ textAlign: "center" }}>Entre em contato!</h1>
            <TextField id="standard-basic" label="Nome" variant="standard" />
            <TextField
              id="standard-basic"
              label="Telefone"
              variant="standard"
            />
            <TextField id="standard-basic" label="Duvida" variant="standard" />
            <Button sx={{ marginTop: "10px" }} variant="outlined">
              Enviar
            </Button>
            <div className={styles.icons}>
              <InstagramIcon
                className={styles.icon}
                sx={{ color: "#1976D2", fontSize: "40px" }}
              />
              <LinkedInIcon
                className={styles.icon}
                sx={{ color: "#1976D2", fontSize: "40px" }}
              />
              <FacebookIcon
                className={styles.icon}
                sx={{ color: "#1976D2", fontSize: "40px" }}
              />
              <WhatsAppIcon
                className={styles.icon}
                sx={{ color: "#1976D2", fontSize: "40px" }}
              />
              <YouTubeIcon
                className={styles.icon}
                sx={{ color: "#1976D2", fontSize: "40px" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default FaleConosco;
