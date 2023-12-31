import React from "react";
import Banner from "../../layouts/Banner";
import Header from "../../layouts/Header";
import Sobre from "../../layouts/Sobre";

import CodeSpacing1 from "../../layouts/CodesSpacings/CodeSpacing1";
import CodeSpacing2 from "../../layouts/CodesSpacings/CodeSpacing2";
import CodeSpacing3 from "../../layouts/CodesSpacings/CodeSpacing3";
import CodeSpacing4 from "../../layouts/CodesSpacings/CodeSpacing4";
import Footer from "../../layouts/footer";

import withRouter from "../../../withRouter";


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Changed: this.props.params.id === 'luiz' ? true : false,
      Euler: {
        Slogan: "Os melhores scripts para suas aplicações web e desktop",
        Text: "Sou um desenvolvedor de software em constante crescimento, dedicado a aprimorar minhas habilidades de programação. Tenho expertise na criação de sites que oferecem uma experiência digital excepcional e funcionalidade eficiente. Além disso, construo aplicativos de desktop e desenvolvo scripts para automação e análise de dados, utilizando linguagens como HTML, CSS, JavaScripte frameworks como React e PyQt à PySide. Estou sempre buscando aprender e me atualizar para fornecer soluções digitais de altaqualidade, automatizando processos e maximizando a eficiência parameus clientes.",
        ToChangeText: "Conheça mais de design",
        CodeSpacings: [<CodeSpacing1 />, <CodeSpacing2 />],
        Persons: ["Pandoo", "Mb", "Tatá"],
      },

      Luiz: {
        Slogan: "Transformando suas ideias em uma experiencia incrivel",
        Text: "Como Ui e Ux Designer, meu foco está em criar experiências digitais intuitivas e envolventes. Através de pesquisa, prototipagem e testes, busco encontrar o equilíbrio perfeito entre estética visual e funcionalidade, visando proporcionar aos usuários uma interação fluída e satisfatória com os produtos e serviços digitais. Meu objetivo é criar designs impactantes que melhoram a vida das pessoas e deixam uma marca positiva no mundo digital.",
        ToChangeText: "Conheça mais de scripts",
        CodeSpacings: [<CodeSpacing3 />, <CodeSpacing4 />],
        Persons: ["Bigou Delivery"],
      },
    };
  }

  ChangePerson = async (Param) => {
    if (Param) {
      await this.setState({ Changed: true });
      document.documentElement.style.setProperty("--Verde", "#BB2649");
      document.documentElement.style.setProperty(
        "--VerdeTransparent1",
        "#bb264952"
      );
      return;
    }
    await this.setState({ Changed: false });
    document.documentElement.style.setProperty("--Verde", "#26bb98");
    document.documentElement.style.setProperty(
      "--VerdeTransparent1",
      "rgba(38, 187, 152, 0.20)"
    );
  };

  componentDidMount(){
    if(this.props.params.id === 'luiz'){
      this.ChangePerson(true)
    }
  }




  render() {
    return (
      <>
        <Header Changed={this.state.Changed} />
        {this.state.Changed ? (
          <Banner
            Changing={this.ChangePerson}
            Changed={this.state.Changed}
            Person={this.state.Luiz}
          />
        ) : (
          <Banner
            Changing={this.ChangePerson}
            Changed={this.state.Changed}
            Person={this.state.Euler}
          />
        )}
        {this.state.Changed ? (
          <Sobre Changed={this.state.Changed} Person={this.state.Luiz}/>
        ) : (
          <Sobre Changed={this.state.Changed} Person={this.state.Euler} />
        )}
        <Footer Changed={this.state.Changed} />
      </>
    );
  }
}


export default withRouter(Home);