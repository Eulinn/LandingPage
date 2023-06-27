import React from "react";

import Carroussel from "../carroussel";

import { RiWhatsappFill } from "react-icons/ri";
import Karol from "../../assets/img/Karol.jpg";
import Caio from "../../assets/img/Caio.jpeg";
import Del from "../../assets/img/Del.jpeg";
import Joao from "../../assets/img/Joao.jpeg";
import Luiz from "../../assets/img/Luiz.jpeg";

export default class Coments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MaxComents: 2,
      EulerComents: [
        {
          image: Karol,
          name: "Karolayne Campos",
          cargo: "Estudante",
          feedback:
            "Fiquei impressionada com a capacidade de resolver problemas complexos de uma forma tão ágil e eficiente, demonstrando que realmente domina onque faz, assim como, um alto nível de profissionalismo e comprometimento. Além do mais, sempre cumpriu os prazos estabelecidos, entregando um trabalho de alta qualidade dentro do tempo previsto e sempre me consultando para saber se eu estava gostando ou não. A dedicação do programador em adquirir novas habilidades e estar atualizado com as últimas tendências tecnológicas é admirável. Sua busca contínua pelo aprimoramento pessoal e profissional reflete em seu trabalho de qualidade.",
        },
        {
          image: Joao,
          name: "João Antônio",
          cargo: "Administrador",
          feedback:
            "Trabalho ótimo, atendimento 100% atencioso e preocupado com os desejos do cliente, um fofo tentando resolver nossos problemas, estou simplesmente encantado com o seu trabalho. Muito obrigado, tem um grande futuro.",
        },
        {
          image: Luiz,
          name: "Luiz Gustavo",
          cargo: "Designer",
          feedback:
            "Com toda certeza tem uma imensa capacidade e facilidade com seu trabalho como programador. Me surpreendeu muito com a facilidade de resolver problemas que tive e com o comprometimento em me entregar tudo em seu devido tempo. Em todo o trabalho sanou todas minhas dúvidas e esteve cem por cento do tempo disposto a me ajudar com mais pedidos e mudanças que gostaria. Um excelente profissional sempre procurando melhorar seu trabalho para conseguir o melhor resultado possível. Me surpreendeu com tal profissionalismo, dedicação e habilidade.",
        },
      ],
      LuizComents: [
        {
          image: Karol,
          name: "Karolayne Campos",
          cargo: "Estudante",
          feedback:
            "Sem dúvida alguma, possui uma grande criatividade e incríveis habilidades artísticas. É admirável a qualidade e originalidade das suas criações. Além de ter sido capaz de entender exatamente o que eu queria que fosse feito, conseguiu capturar perfeitamente a essência do projeto e transformá-la em designs visualmente atraentes. Gostei muito do comprometimento e o esforço para garantir que cada detalhe fosse cuidadosamente trabalhado, desde a escolha de cores até a tipografia e composição.",
        },
        {
          image: Caio,
          name: "Caio",
          cargo: "Copyright",
          feedback:
            "Seus designs são modernos e atuais, ao mesmo tempo em que mantém uma identidade visual única. Parabéns pelo seu talento em traduzir conceitos em imagens impressionantes. Certamente, seu trabalho é capaz de destacar-se em qualquer meio ou plataforma. Continue inspirando com seu talento e criatividade excepcionais!",
        },
        {
          image: Del,
          name: "Del",
          cargo: "Desenvolvedor",
          feedback:
            "Acho esse trabalho excelente em termos de design gráfico! Sua habilidade em combinar cores, tipografia, imagens e layout resulta em uma composição visualmente impressionante. O design comunica uma identidade única e memorável, captando a essência da mensagem de forma autêntica. A atenção aos detalhes, como textura e efeitos visuais sutis, adicionam profundidade e interesse, tornando a composição visualmente cativante.",
        },
      ],
    };
  }

  render() {
    return (
      <div className="ContentSobre Carroussel" id="Depoimentos">
        <p className="TitleGeral">
          O que as pessoas que eu já trabalhei falam de mim
        </p>

        <Carroussel
          Coments={
            this.props.Changed
              ? this.state.LuizComents
              : this.state.EulerComents
          }
        />

        <div className="ContainerFeedbacks">
          {this.props.Changed
            ? this.state.LuizComents.map((item, index) => {
                return (
                  <div key={index} className="ItemSlider">
                    <div className="WhatsIcons">
                      <span className="WhatsIcon">
                        <RiWhatsappFill />
                      </span>
                    </div>
                    <div className="PerfilSlider">
                      <div
                        className="PhotoPerfilSlider"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="ContentPerfilSlider">
                        <p className="NamePerfilSlider">{item.name}</p>
                        <p className="CargoPerfilSlider">{item.cargo}</p>
                      </div>
                    </div>

                    <div className="Feedback">{item.feedback}</div>
                  </div>
                );
              })
            : this.state.EulerComents.map((item, index) => {
                return (
                  <div key={index} className="ItemSlider">
                    <div className="WhatsIcons">
                      <span className="WhatsIcon">
                        <RiWhatsappFill />
                      </span>
                    </div>
                    <div className="PerfilSlider">
                      <div
                        className="PhotoPerfilSlider"
                        style={{ backgroundImage: `url(${item.image})` }}
                      ></div>
                      <div className="ContentPerfilSlider">
                        <p className="NamePerfilSlider">{item.name}</p>
                        <p className="CargoPerfilSlider">{item.cargo}</p>
                      </div>
                    </div>

                    <div className="Feedback">{item.feedback}</div>
                  </div>
                );
              })}
          {/* <div className="ReturnHome">
            <button>Carregar Mais...</button>
          </div> */}
        </div>
      </div>
    );
  }
}
