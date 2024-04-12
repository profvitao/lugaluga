import * as React from "react";

import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Chip from "@mui/material/Chip";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LoadingButton from "@mui/lab/LoadingButton";
export default function BasicTable({ children }) {
  const [prazo, setPrazo] = React.useState(15);

  const handleChange = (event) => {
    setPrazo(event.target.value);
  };

  let rows = children;
  let tipo = rows[0].tipo;
  let cabecalho = rows[1];

  rows = rows.map((row) => {
    var color = "default";
    if (row.status == "Em análise") {
      color = "warning";
    } else if (row.status == "Aprovado") {
      color = "success";
    } else if (row.status == "Reprovado") {
      color = "error";
    } else if (row.status == "Pendente") {
      color = "default";
    }

    row.color = color;
    return row;
  });
  rows.shift();

  const [openSolicitacao, setOpenSolicitacao] = React.useState(false);
  const [openAtendimento, setOpenAtendimento] = React.useState(false);
  const [rowId, setRowId] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const handleOpenSolicitacao = (btn) => {
    setOpenSolicitacao(true);
    setRowId(btn.target.id);
  };
  const handleOpenAtendimento = () => {
    setOpenAtendimento(true);
  };
  const handleCloseSolicitacao = () => {
    setOpenSolicitacao(false);
  };
  const handleCloseAtendimento = () => {
    setOpenAtendimento(false);
  };

  function getPrazo(prazo) {
    var data = new Date();
    var outra = new Date();
    outra.setDate(data.getDate() + prazo);
    return outra.toJSON().replace(/T.*/, "").split("-").reverse().join("/");
  }
  const doSolicitar = () => {
    setLoading(true);

    var body = {
      id_cliente: 1,
      id_produto: parseInt(rowId),
      data_fim: getPrazo(prazo),
    };
    fetch("http://localhost:8080/usuario/aluguel", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    }).then((Response) => {
      Response.json()
        .then((data) => {
          console.log(data);
        })
        .finally(() => {
          setTimeout(() => {
            //EXIBIR ALERTA DE SUCESSO
            //OU FRACASSO
            setLoading(false);
          }, 1000);
        });
    });
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        {/* CABEÇALHO */}
        <TableHead>
          <TableRow>
            {cabecalho.map((item) => {
              return (
                <TableCell
                  align="center"
                  sx={{ fontSize: 16, fontWeight: 600 }}
                >
                  {item}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {Object.keys(row).map((item) => {
                return <TableCell align="center">{row[item]}</TableCell>;
              })}
              <TableCell align="center">
                <Chip
                  sx={{ width: 100 }}
                  color={row.color}
                  label={row.status}
                ></Chip>
              </TableCell>
              <TableCell align="center">
                {row.justificativa == null ? "-" : row.justificativa}
              </TableCell>
              <TableCell align="center">
                <Button
                  sx={{ backgroundColor: "#1899" }}
                  size="small"
                  variant="contained"
                  id={row.id}
                  onClick={
                    tipo == "solicitacao"
                      ? handleOpenSolicitacao
                      : handleOpenAtendimento
                  }
                >
                  {tipo == "atendimento" ? "Atender" : "Solicitar"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={openSolicitacao}
        onClose={handleCloseSolicitacao}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          {"Deseja realizar a solicitação deste equipamento?"}
        </DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>
              Ao realizar a solicitação do equipamento, o mesmo entrará em fase
              de análise. Para acompanhar, acesse a página "Acompanhamento de
              Solicitações"
            </p>
            <p>Selecione abaixo o prazo de locação</p>

            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Prazo</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={prazo}
                  label="Prazo"
                  onChange={handleChange}
                >
                  <MenuItem value={15}>15 dias</MenuItem>
                  <MenuItem value={30}>30 dias</MenuItem>
                  <MenuItem value={60}>60 dias</MenuItem>
                  <MenuItem value={90}>90 dias</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleCloseSolicitacao}>
            Cancelar
          </Button>
          <LoadingButton
            variant="contained"
            color="success"
            id={rowId}
            onClick={doSolicitar}
            loading={loading}
            autoFocus
          >
            Solicitar
          </LoadingButton>
        </DialogActions>
      </Dialog>
      <Dialog
        open={openAtendimento}
        onClose={handleCloseAtendimento}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle sx={{ textAlign: "center" }} id="alert-dialog-title">
          {"Atendimento de Requisição"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Por favor inclua a justificativa, tanto para aprovação como
            reprovação do equipamento.
          </DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="justificativa"
            name="Justificativa"
            label="Justificativa"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            color="error"
            onClick={handleCloseAtendimento}
          >
            Reprovar
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseAtendimento}
            autoFocus
          >
            Aprovar
          </Button>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}
