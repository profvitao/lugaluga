import styles from "./Acompanhamento.module.css";
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from "react";

import {
  Box,
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";

function Acompanhamento() {
  const [openSolicitacao, setOpenSolicitacao] = React.useState(false);
  const [rowId, setRowId] = React.useState("");
  const [loading, setLoading] = React.useState(false);

  const [prazo, setPrazo] = React.useState(15);
  function getPrazo(prazo) {
    var data = new Date();
    var outra = new Date();
    outra.setDate(data.getDate() + prazo);
    return outra.toJSON().replace(/T.*/, "").split("-").reverse().join("/");
  }
  const handleChange = (event) => {
    setPrazo(event.target.value);
  };
  const doSolicitar = () => {
    setLoading(true);

    var body = {
      id_cliente: 1,
      id_produto: parseInt(rowId),
      data_fim: getPrazo(prazo),
    };
    fetch("http://localhost:8080//acompanhamento/aluguel", {
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

  const handleOpenSolicitacao = (btn) => {
    setOpenSolicitacao(true);
    setRowId(btn.target.id);
  };
  const handleCloseSolicitacao = () => {
    setOpenSolicitacao(false);
  };
  const [cabecalho, setCabecalho] = React.useState([]);
  const [produtos, setProdutos] = React.useState([]);

  useEffect(() => {
    // Função para carregar dados do backend
    const fetchData = async () => {
      try {
        fetch("http://localhost:8080/acompanhamento/1").then((Response) => {
          Response.json().then((data) => {
            var obj = Object.keys(data.data[0]);
            setCabecalho(
              obj.map((item) => {
                if (item == "qtde") {
                  item = "quantidade";
                } else if (item == "id") {
                  item = "Código";
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
        <h1>Acompanhamento de Solicitações</h1>
        {produtos.length > 1 ? (
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
                    <TableCell align="center">{row.id}</TableCell>
                    <TableCell align="center">{row.produto}</TableCell>
                    <TableCell align="center">{row.descricao}</TableCell>
                    <TableCell align="center">{row.marca}</TableCell>
                    <TableCell align="center">{row.modelo}</TableCell>
                    <TableCell align="center">
                      R$ {Math.round(row.preco, 2)}
                    </TableCell>
                    <TableCell align="center">{row.qtde}</TableCell>
                    <TableCell align="center">
                      {row.observacao == null ? "-" : row.observacao}
                    </TableCell>
                    <TableCell align="center">
                      <Chip
                        sx={{ width: 100 }}
                        color={row.color}
                        label={row.status}
                      ></Chip>
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
                    Ao realizar a solicitação do equipamento, o mesmo entrará em
                    fase de análise. Para acompanhar, acesse a página
                    "Acompanhamento de Solicitações"
                  </p>
                  <p>Selecione abaixo o prazo de locação</p>

                  <Box sx={{ minWidth: 120 }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Prazo
                      </InputLabel>
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
export default Acompanhamento;
