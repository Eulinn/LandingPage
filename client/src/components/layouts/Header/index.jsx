import react from "react";
import "./header.css";

export default class Header extends react.Component {
  render() {
    return (
      <div className="Header">
        <div className="HeaderTitle">
          {this.props.Changed ? (
            <>
              <span style={{ color: "var(--Verde)", paddingLeft: "10px" }}>
                LGAV
              </span>
            </>
          ) : (
            <>
              euler
              <span style={{ color: "var(--Verde)", paddingLeft: "10px" }}>
                couto
              </span>
            </>
          )}
        </div>
        <ul className="HeaderMenu">
          <a href="#Contato"><li>Contato</li></a>
          <a href="#Sobre"><li>Sobre</li></a>
        </ul>
        <div className="HeaderButton">
          <button
            onClick={() => {
              window.open(
                `https://api.whatsapp.com/send?phone=${this.props.Changed ? 32999550240 : 32999266247}`,
                "_blank"
              );
            }}
          >
            Whatsapp
          </button>
        </div>
      </div>
    );
  }
}
