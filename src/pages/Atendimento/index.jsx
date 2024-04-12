import styles from "./Atendimento.module.css";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

function Atendimento() {
  const [rowId, setRowId] = React.useState("");
  const [justificativa, setJustificativa] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [openAtendimento, setOpenAtendimento] = React.useState(false);

  const handleOpenAtendimento = (e) => {
    setRowId(e.target.id);
    setOpenAtendimento(true);
  };
  const handleCloseAtendimento = () => {
    window.location.reload();
    setOpenAtendimento(false);
  };

  const doAprovar = () => {
    setLoading(true);
    var body = {
      id_aluguel: rowId,
      situacao: "Aprovado",
      justificativa: justificativa,
    };
    fetch(`http://localhost:8080/admin/alugueis`, {
      method: "PATCH",
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

    handleCloseAtendimento();
  };

  const doReprovar = () => {
    setLoading(true);
    var body = {
      id_aluguel: rowId,
      situacao: "Reprovado",
      justificativa: justificativa,
    };
    fetch(`http://localhost:8080/admin/alugueis`, {
      method: "PATCH",
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

    handleCloseAtendimento();
  };

  const [cabecalho, setCabecalho] = React.useState([]);
  const [produtos, setProdutos] = React.useState([]);

  useEffect(() => {
    // Função para carregar dados do backend
    const fetchData = async () => {
      try {
        fetch("http://localhost:8080/admin/alugueis").then((Response) => {
          Response.json().then((data) => {
            var obj = Object.keys(data.data[0]);
            obj.shift();
            obj.push("Ações");
            setCabecalho(
              obj.map((item) => {
                if (item == "cpf") {
                  item = "CPF";
                }
                return (
                  item.charAt(0).toUpperCase() + item.slice(1, item.length)
                );
              })
            );

            var prods = data.data;
            var arrProd = [];
            prods.forEach((produto) => {
              arrProd.push(produto);
            });
            setProdutos(arrProd);
          });
        });
      } catch (error) {
        console.error("Erro ao carregar dados do backend:", error);
      }
    };

    fetchData(); // Chamada da função para carregar os dados ao montar o componente
  }, []); //

  return (
    <>
      <div className={styles.container}>
        <h1>Atendimento de Solicitações</h1>
        {produtos.length >= 1 ? (
          <TableContainer className={styles.tabela}>
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
                {Array.from(produtos).map((row) => (
                  <TableRow
                    key={row}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="center">{row.nome}</TableCell>
                    <TableCell align="center">{row.cpf}</TableCell>
                    <TableCell align="center">{row.produto}</TableCell>
                    <TableCell align="center">
                      R$ {Math.round(row.preco, 2)}
                    </TableCell>
                    <TableCell align="center">
                      <Button
                        sx={{ backgroundColor: "#1899" }}
                        size="small"
                        variant="contained"
                        id={row.id}
                        onClick={handleOpenAtendimento}
                      >
                        Atender
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
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
                  onChange={(e) => {
                    setJustificativa(e.target.value);
                  }}
                  value={justificativa}
                />
              </DialogContent>
              <DialogActions>
                <Button variant="contained" color="error" onClick={doReprovar}>
                  Reprovar
                </Button>
                <Button
                  variant="contained"
                  color="success"
                  onClick={doAprovar}
                  autoFocus
                >
                  Aprovar
                </Button>
              </DialogActions>
            </Dialog>
          </TableContainer>
        ) : (
          <div>
            <span className={styles.nenhum}>Nenhum produto disponível!</span>
          </div>
        )}

        {/* <BasicTable>{rows}</BasicTable> */}
      </div>
    </>
  );
}
export default Atendimento;
