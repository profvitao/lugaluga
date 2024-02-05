import BasicTable from "../../components/Table";
import styles from "./Atendimento.module.css";

function Atendimento() {
  const rows = [
    { tipo: "atendimento" },
    {
      nome: "Iphone 15",
      cliente: "Jorginho",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Em análise",
    },
    {
      nome: "MacBook Pro",
      cliente: "Julinho",
      descricao: "256GB, i7 e etc.",
      preco: "899,99",
      status: "Aprovado",
    },
    {
      nome: "Guitarra Gibson Les Paul",
      cliente: "Vitinho",
      descricao: "Captador Fisher",
      preco: "199,99",
      status: "Reprovado",
      justificativa: "Equipamento indisponível",
    },
    {
      nome: "GoPRO",
      cliente: "Deivinho",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Pendente",
    },
    {
      nome: "PlayStation 5",
      cliente: "Weslinho",
      descricao: "15 jogos",
      preco: "159,99",
      status: "Pendente",
    },
    {
      nome: "Iphone 15",
      cliente: "Wéllitinho",
      descricao: "256GB, 5g e etc.",
      preco: "399,99",
      status: "Pendente",
    },
    {
      nome: "GoPRO",
      cliente: "Estevinho",
      descricao: "40h de duração da bateria",
      preco: "149,99",
      status: "Pendente",
    },
  ];
  return (
    <>
      <div className={styles.container}>
        <h1>Atendimento de Solicitações</h1>
        <BasicTable>{rows}</BasicTable>
      </div>
    </>
  );
}
export default Atendimento;
