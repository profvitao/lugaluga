import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

export default function Cartao({ produto }) {
  return (
    <Card sx={{ margin: 5, width: 350 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image={produto.imagem}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {produto.nome}
          </Typography>
          <Typography
            variant="body2"
            sx={{ width: "350px" }}
            color="text.secondary"
          >
            {produto.descricao}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary">LUGA LUGA</Button>
      </CardActions>
    </Card>
  );
}
