import { useEffect, useState } from "react";
import BasicTable from "../../components/Table";
import styles from "./SolicitacaoAluguel.module.css";

// const [rows, setRows] = useState();
// setRows([]);
var rows = [{ tipo: "solicitacao" }];
fetch("http://localhost:8080/lista_produtos").then((Response) => {
  Response.json().then((data) => {
    var obj = Object.keys(data.data[0]);
    var cabecalho = obj.map((item) => {
      if (item == "qtde") {
        item = "quantidade";
      }
      return item.charAt(0).toUpperCase() + item.slice(1, item.length);
    });

    rows.push(cabecalho);
    var produtos = data.data;
    produtos.forEach((produto) => {
      rows.push(produto);
    });
  });
});
function SolicitacaoAluguel() {
  // rows = [
  // { tipo: "solicitacao" },
  // {
  //   id: 1,
  //   nome: "Iphone 15",
  //   descricao: "256GB, 5g e etc.",
  //   preco: "399,99",
  //   status: "Disponivel",
  // },
  //   {
  //     id: 2,
  //     nome: "MacBook Pro",
  //     descricao: "256GB, i7 e etc.",
  //     preco: "899,99",
  //     status: "Disponivel",
  //   },
  //   {
  //     id: 3,
  //     nome: "Guitarra Gibson Les Paul",
  //     descricao: "Captador Fisher",
  //     preco: "199,99",
  //     status: "Disponivel",
  //   },
  //   {
  //     id: 4,
  //     nome: "GoPRO",
  //     descricao: "40h de duração da bateria",
  //     preco: "149,99",
  //     status: "Disponivel",
  //   },
  //   {
  //     id: 5,
  //     nome: "PlayStation 5",
  //     descricao: "15 jogos",
  //     preco: "159,99",
  //     status: "Disponivel",
  //   },
  //   {
  //     id: 6,
  //     nome: "Iphone 15",
  //     descricao: "256GB, 5g e etc.",
  //     preco: "399,99",
  //     status: "Disponivel",
  //   },
  //   {
  //     id: 7,
  //     nome: "GoPRO",
  //     descricao: "40h de duração da bateria",
  //     preco: "149,99",
  //     status: "Disponivel",
  //   },
  // ];

  return (
    <>
      <div className={styles.container}>
        <h1>Solicitação de Aluguel</h1>
        <BasicTable>{rows}</BasicTable>
      </div>
    </>
  );
}
export default SolicitacaoAluguel;
