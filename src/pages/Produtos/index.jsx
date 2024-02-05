import Card from "../../components/Card";
import iphone15 from "../../../public/iphone15.jpg";
import macbook from "../../../public/macbook.jpeg";
import playstation from "../../../public/ps5.jpg";
import GoPro from "../../../public/GoPro.jpg";
import guitarra from "../../../public/gibson.webp";
import styles from "./Produtos.module.css";
function Produtos() {
  let produtos = [
    {
      nome: "IPhone 15 Pro Max",
      descricao:
        "O iPhone 15 Pro Max representa a vanguarda da tecnologia móvel, oferecendo uma experiência excepcional que redefine os padrões de excelência. Com um design elegante e características avançadas, este dispositivo promete elevar sua jornada tecnológica a novos patamares.",
      imagem: iphone15,
    },
    {
      nome: "MacBook Pro",
      descricao:
        "O MacBook Pro é a personificação da excelência no universo da computação portátil, combinando potência incomparável, design elegante e recursos inovadores para impulsionar sua produtividade a novos patamares.",
      imagem: macbook,
    },
    {
      nome: "PlayStation 5",
      descricao:
        "O PlayStation 5 (PS5) é uma obra-prima de inovação e tecnologia, projetado para oferecer uma experiência de jogo que transcende os limites da imaginação. Com um design arrojado e recursos avançados, o PS5 é mais do que um console de jogos; é uma porta de entrada para um novo mundo de entretenimento interativo.",
      imagem: playstation,
    },
    {
      nome: "GoPro Hero 5",
      descricao:
        "A GoPro HERO5 é muito mais do que uma câmera de ação; é o seu companheiro ideal para registrar e reviver momentos emocionantes com qualidade excepcional. Projetada para aventuras e resistente às condições mais desafiadoras, a HERO5 oferece um desempenho notável para capturar cada momento com clareza e vivacidade.",
      imagem: GoPro,
    },
    {
      nome: "Guitarra Gibson Les Paul",
      descricao:
        "A Gibson Les Paul é mais do que uma guitarra; é uma lenda viva no universo da música. Com décadas de história e uma reputação inabalável, a Les Paul continua a ser a escolha de músicos lendários e aspirantes a artistas, oferecendo um som distinto e uma experiência de tocar incomparável.",
      imagem: guitarra,
    },
    {
      nome: "IPhone 15 Pro Max",
      descricao:
        "O iPhone 15 Pro Max representa a vanguarda da tecnologia móvel, oferecendo uma experiência excepcional que redefine os padrões de excelência. Com um design elegante e características avançadas, este dispositivo promete elevar sua jornada tecnológica a novos patamares.",
      imagem: iphone15,
    },
  ];

  return (
    <>
      <div className="container">
        <h1 className={styles.h1}>Conheça nossos produtos</h1>
        <div className={styles.cards}>
          {produtos.map((produto) => {
            return <Card className={styles.card} produto={produto} />;
          })}
        </div>
      </div>
    </>
  );
}
export default Produtos;
