import BasicTable from "../../components/Table";
import styles from "./SolicitacaoAluguel.module.css";
function SolicitacaoAluguel() {
  const rows = [
    { tipo: "solicitacao" },
    {
      nome: "Iphone 15",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Disponivel",
    },
    {
      nome: "MacBook Pro",
      descricao: "256GB, i7 e etc.",
      preco: "899,99",
      status: "Disponivel",
    },
    {
      nome: "Guitarra Gibson Les Paul",
      descricao: "Captador Fisher",
      preco: "199,99",
      status: "Disponivel",
    },
    {
      nome: "GoPRO",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Disponivel",
    },
    {
      nome: "PlayStation 5",
      descricao: "15 jogos",
      preco: "159,99",
      status: "Disponivel",
    },
    {
      nome: "Iphone 15",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Disponivel",
    },
    {
      nome: "GoPRO",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Disponivel",
    },
  ];
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
