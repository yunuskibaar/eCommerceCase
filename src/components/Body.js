// Body.js
import React, { useEffect,useState } from "react";
import ScrollReveal from "scrollreveal";
import "../styles/Body.css";



class Body extends React.Component {
  componentDidMount() {
    ScrollReveal().reveal('.card', { delay: 300, origin: 'bottom', distance: '50px', opacity: 0 });
  }
  
  render(){

  

  return (
    <div className="container" id="body-container" >

      <div className="left-div">

      <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Fiyat
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Ram Kapasitesi
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Dahili Hafıza
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Ekran Boyutu
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Pil Gücü
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Kamera Çözünürlüğü
     </button>
     </div>
     <div class="dropdown">
      <button class="btn " type="button" id="dropdownMenuButton"   >
      Renk
     </button>
     </div>
    
      </div>


        <div className="right-div">
      
       <div className="row" >

        {this.props.Phones.map((phone)=>(
          <div className="col-lg-4">
          <div className="card mb-4">
            <img className="card-img-top" src={phone.imgURL} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title">{phone.brand}</h5>
              
              <h4><span className="badge" >rating: {phone.rating}</span></h4>
              <div className="d-flex justify-content-between align-items-center" id="low-content">
                <h2 className="card-price" >{phone.price} ₺</h2>
              <button id="card-sepet" className="btn" >sepete ekle</button>
              </div>
            </div>
          </div>
        </div>
        
          
        ))}


      </div>
      </div>
      </div>
    

    
  );
  }
};

export default Body;
