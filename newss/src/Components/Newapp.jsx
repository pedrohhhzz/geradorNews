import React, { useState } from 'react';
import Card from './Card';
import '../App.css';
import { Menu, X } from "lucide-react";

const Newapp = () => {


  const [search, setSearch] = useState("entretenimento");
  const [newsData, setNewData] = useState(null)
  const API_KEY = "816a3d32096443feaed2bf9cc0dd4216";

  const getData = async() => {
    const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
    const jsonData = await response.json();
    console.log(jsonData);
    setNewData(jsonData.articles); 
    
  }



  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const navItems = [
    { label: "Esportes", href: "#" },
    { label: "Entretenimento", href: "#" },
    { label: "Política", href: "#" }
  ];

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  const handleInput = (e) =>{
    console.log(e.target.value);
    setSearch(e.target.value)
  }

  return (
    <div>
      <nav className='navbar'>

   


        <div className='navbar-content'>
          <h1 className='navbar-title'>Newss</h1>

          {/* Menu padrão para telas grandes */}
          <ul className='navbar-links hidden md:flex'>
            {navItems.map((item, index) => (
              <li key={index} className='navbar-item'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>

          {/* Botão para abrir o menu no mobile */}
          <button onClick={toggleNavbar} className='menu-button md:hidden'>
            {mobileDrawerOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menu mobile */}
      {mobileDrawerOpen && (
        <div className="mobile-menu md:hidden">
          <ul>
            {navItems.map((item, index) => (
              <li key={index} className='mobile-menu-item'>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </div>
      )}

<div className='head' >Fique Atualizado!!!</div>


<div className='searchBar' >
      <input type='text' placeholder='Pesquisar' onChange={handleInput} ></input>
      <button onClick={getData} >Pesquisar</button>
    </div>

      <div>
      <Card data={newsData} />
      </div>
    </div>
  );
};

export default Newapp;