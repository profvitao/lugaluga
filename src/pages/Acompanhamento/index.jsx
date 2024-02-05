import BasicTable from "../../components/Table";
import styles from "./Acompanhamento.module.css";
function Acompanhamento() {
  const rows = [
    { tipo: "acompanhamento" },
    {
      nome: "Iphone 15",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Em análise",
    },
    {
      nome: "MacBook Pro",
      descricao: "256GB, i7 e etc.",
      preco: "899,99",
      status: "Aprovado",
    },
    {
      nome: "Guitarra Gibson Les Paul",
      descricao: "Captador Fisher",
      preco: "199,99",
      status: "Reprovado",
      justificativa: "Equipamento indisponível",
    },
    {
      nome: "GoPRO",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Pendente",
    },
    {
      nome: "PlayStation 5",
      descricao: "15 jogos",
      preco: "159,99",
      status: "Pendente",
    },
    {
      nome: "Iphone 15",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Pendente",
    },
    {
      nome: "GoPRO",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Pendente",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <h1>Acompanhamento de Solicitações</h1>
        <BasicTable>{rows}</BasicTable>
      </div>
    </>
  );
}
export default Acompanhamento;
