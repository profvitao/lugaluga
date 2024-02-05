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

export default function BasicTable({ children }) {
  let rows = children;
  let tipo = rows[0].tipo;
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
  console.log(rows);

  const [openSolicitacao, setOpenSolicitacao] = React.useState(false);
  const [openAtendimento, setOpenAtendimento] = React.useState(false);

  const handleOpenSolicitacao = () => {
    setOpenSolicitacao(true);
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

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {tipo == "atendimento" ? (
              <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
                Nome
              </TableCell>
            ) : (
              ""
            )}
            <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
              Nome
            </TableCell>
            <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
              Descrição
            </TableCell>
            <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
              Preço/Mês
            </TableCell>
            {tipo == "acompanhamento" || tipo == "solicitacao" ? (
              <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
                Status
              </TableCell>
            ) : (
              ""
            )}
            {tipo == "acompanhamento" ? (
              <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
                Justificativa
              </TableCell>
            ) : (
              <TableCell align="center" sx={{ fontSize: 16, fontWeight: 600 }}>
                Ações
              </TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.nome}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {tipo == "atendimento" ? (
                <TableCell align="center" component="th" scope="row">
                  {row.cliente}
                </TableCell>
              ) : (
                ""
              )}

              <TableCell align="center" component="th" scope="row">
                {row.nome}
              </TableCell>
              <TableCell align="center">{row.descricao}</TableCell>
              <TableCell align="center">R$ {row.preco}</TableCell>
              {tipo == "atendimento" ? (
                ""
              ) : (
                <TableCell align="center">
                  <Chip
                    sx={{ width: 100 }}
                    color={row.color}
                    label={row.status}
                  ></Chip>
                </TableCell>
              )}
              {tipo == "acompanhamento" ? (
                <TableCell align="center">
                  {row.justificativa == null ? "-" : row.justificativa}
                </TableCell>
              ) : (
                <TableCell align="center">
                  <Button
                    sx={{ backgroundColor: "#1899" }}
                    size="small"
                    variant="contained"
                    onClick={
                      tipo == "solicitacao"
                        ? handleOpenSolicitacao
                        : handleOpenAtendimento
                    }
                  >
                    {tipo == "atendimento" ? "Atender" : "Solicitar"}
                  </Button>
                </TableCell>
              )}
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
            Ao realizar a solicitação do equipamento, o mesmo entrará em fase de
            análise. Para acompanhar, acesse a página "Acompanhamento de
            Solicitações"
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            sx={{ backgroundColor: "#f1f1f1", color: "black" }}
            onClick={handleCloseSolicitacao}
          >
            Cancelar
          </Button>
          <Button
            variant="contained"
            color="success"
            onClick={handleCloseSolicitacao}
            autoFocus
          >
            Solicitar
          </Button>
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
