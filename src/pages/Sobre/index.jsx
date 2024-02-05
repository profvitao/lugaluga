import welcome from "../../../public/welcome.svg";
import styles from "./Sobre.module.css";
function Sobre() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.blocoa}>
          <h1>Bem vindo a LUGA-LUGA</h1>

          <img src={welcome} alt="" srcset="" />
        </div>
        <div className={styles.blocob}>
          <div className={styles.blococ}>
            <h2>A Luga-Luga</h2>
            <p>
              Bem-vindo à LUGA-LUGA, sua principal escolha para experiências
              eletrônicas sob medida! Na LUGA-LUGA, entendemos que a tecnologia
              avança rapidamente, e nem sempre é fácil manter-se atualizado com
              os dispositivos eletrônicos mais recentes. É por isso que estamos
              aqui para oferecer a solução perfeita: o aluguel de aparelhos
              eletrônicos de última geração, projetado para atender às suas
              necessidades.
            </p>
          </div>
          <div className={styles.blococ}>
            <h3>O Que Oferecemos:</h3>
            <div className={styles.ofertas}>
              <div className={styles.oferta}>
                <h4>Variedade de Dispositivos:</h4>
                <p>
                  Na LUGA-LUGA, proporcionamos acesso a uma ampla variedade de
                  aparelhos eletrônicos, desde smartphones e tablets até laptops
                  de ponta. Nossos dispositivos são cuidadosamente selecionados
                  para garantir que você tenha em mãos a tecnologia mais recente
                  e inovadora.
                </p>
              </div>
              <div className={styles.oferta}>
                <h4>Flexibilidade de Aluguel:</h4>
                <p>
                  Oferecemos opções de aluguel flexíveis, adaptadas ao seu
                  cronograma e requisitos específicos. Seja para uma necessidade
                  temporária ou para testar um dispositivo antes de comprar, a
                  LUGA-LUGA tem a solução certa para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Sobre;
