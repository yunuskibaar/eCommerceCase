// Top.js
import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-scroll";

import "../styles/top.css";
import Body from "./Body";


class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
      kategoriMenuOpen: false,
    };

  }

 

  componentDidMount() {
    
    ScrollReveal().reveal("#Logo", {
      origin: "top", 
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
    });

    ScrollReveal().reveal(".search-bar", {
      origin: "left",
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      delay: 100, 
    });
    ScrollReveal().reveal("#Hesabım", {
      origin: "left", 
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      delay: 100, 
    });
    ScrollReveal().reveal("#Favoriler", {
      origin: "left", 
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      delay: 150, 
    });
    ScrollReveal().reveal("#Kategori", {
      origin: "left", 
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      delay: 150, 
    });

    ScrollReveal().reveal(".Sepet", {
      origin: "left", 
      distance: "50px",
      duration: 800,
      easing: "ease-in-out",
      delay: 200, 
    });
  }

  toggleMenu = () => {
    this.setState((prevState) => ({
      menuOpen: !prevState.menuOpen,
    }));
  };

  handleClick = (menu) => {
    this.setState({
      menuOpen: false,
    });
  };

  toggleKategoriMenu = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        kategoriMenuOpen: !prevState.kategoriMenuOpen,
      }));
    }, 200); 
  }
  render() {
    return (
      <div
        className="container pt-4"
        style={{ width: "100%", margin: "0 auto" }}
      >
        <div className="container" id="navbar-container">
          <a id="Logo">Per</a>
            <form>
              <div className="form-now mb-5">
                <div className="col-12" >
                  <input 
                  onChange={this.props.searchPhoneProp} 
                  type="text" 
                  placeholder="Ara..." 
                  className="search-bar" 
                  />
                  
                  </div>
              </div>
            </form>
          
          <div className="menu-toggle" onClick={this.toggleMenu}>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <ul className={`navbar-menu ${this.state.menuOpen ? "active" : ""}`}>
            <li className="menu-item" id="Hesabım">
              <Link smooth={true} offset={-100} duration={500}>
                Hesabım
              </Link>
            </li>
            <li className="menu-item" id="Favoriler">
              Favoriler
            </li>
            <li className="menu-item" id="Kategori" onClick={this.toggleKategoriMenu}>Kategoriler</li>

            <li className="Sepet">Sepetim</li>
          </ul>
        </div>
        <ul className={`horizontal-menu ${this.state.kategoriMenuOpen ? "active" : ""}`}>
          <li>Kadın</li>
          <li>Erkek </li>
          <li>Anne & Çocuk</li>
          <li>Ev & Yaşam</li>
          <li>Süpermarket</li>
          <li>Kozmetik</li>
          <li>Ayakkabı & Çanta</li>
          <li>Elektronik</li>
          <li>Spor & Outdoor</li>
        </ul>

        
      </div>
    );
  }
}

export default Top;
