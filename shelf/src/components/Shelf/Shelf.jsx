import Card from "./Card";
import "./style.css"

export default function Shelf() {
  return (
    <div className="containerShelf">
      <div className="mainCarousel">
        <div className="contentShelf">
          <Card
            src="../../images/mamadeira.png"
            description="Mamadeira bico pétala, silicone não tóxico que imita o bico do seio materno, se adapta a boca do nenem. Idicado para bebês a partir de 1 mês."
            oldprice="R$ 520,00"
            newprice="R$ 200,00"
            conditions="2x de R$ 100,00"
          />
          <Card
            src="../../images/girafa.png"
            description="Girafinha de pelucia, 100% algodão, sem corante, com tratamento antiacaro e sem peças miudas. Indicado para crinças de 1 ano."
            oldprice="R$ 150,00"
            newprice="R$ 95,00"
            conditions="2x de R$ 47,50,00"
          />
          <Card
            src="../../images/mamadeira.png"
            description="Mamadeira bico pétala, silicone não tóxico que imita o bico do seio materno, se adapta a boca do nenem. Idicado para bebês a partir de 1 mês."
            oldprice="R$ 320,00"
            newprice="R$ 115,00"
            conditions="2x de R$ 57,50"
          />
          <Card
            src="../../images/girafa.png"
            description="Girafinha de pelucia, 100% algodão, sem corante, com tratamento antiacaro e sem peças miudas. Indicado para crinças de 1 ano."
            oldprice="R$ 520,00"
            newprice="R$ 200,00"
            conditions="2x de R$ 100,00"
          />
          <Card
            src="../../images/mamadeira.png"
            description="Mamadeira bico pétala, silicone não tóxico que imita o bico do seio materno, se adapta a boca do nenem. Idicado para bebês a partir de 1 mês."
            oldprice="R$ 150,00"
            newprice="R$ 95,00"
            conditions="2x de R$ 47,50,00"
          />
          <Card
            src="../../images/girafa.png"
            description="Girafinha de pelucia, 100% algodão, sem corante, com tratamento antiacaro e sem peças miudas. Indicado para crinças de 1 ano."
            oldprice="R$ 320,00"
            newprice="R$ 115,00"
            conditions="2x de R$ 57,50"
          />
        </div>
      </div>
    </div>
  )
}