import React from "react";
import Banner from "../../layouts/Banner";
import Header from "../../layouts/Header";
import Sobre from "../../layouts/Sobre";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      Changed: false,
      Text: 'Sou um desenvolvedor de software em constante crescimento, dedicado a aprimorar minhas habilidades de programação. Tenhoexpertise na criação de sites que oferecem uma experiência digitalexcepcional e funcionalidade eficiente. Além disso, construoaplicativos de desktop e desenvolvo scripts para automação eanálise de dados, utilizando linguagens como HTML, CSS, JavaScripte frameworks como React e PyQt à PySide. Estou sempre buscandoaprender e me atualizar para fornecer soluções digitais de altaqualidade, automatizando processos e maximizando a eficiência parameus clientes.'
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

  ChangeBanner = () => {
    if (this.state.Changed) {
      return (
        <Banner
        Changing={this.ChangePerson}
        Changed={this.state.Changed}
        slogan={"Transformando suas ideias em uma experiencia incrivel"}
        Text={''}
      />
      );
    }
    return (
      <Banner
        Changing={this.ChangePerson}
        Changed={this.state.Changed}
        slogan={"Os melhores scripts para suas aplicações web e desktop"}
        Text={this.state.Text}
      />
    );
  };

  render() {
    return (
      <>
        <Header Changed={this.state.Changed} />
        {this.ChangeBanner()}
        <Sobre />
      </>
    );
  }
}
