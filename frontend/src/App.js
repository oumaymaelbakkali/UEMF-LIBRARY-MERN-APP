import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Carousel from './components/Carousel'
import Accordion from './components/Accordion'
import CardNewRealeases from './components/CardNewRealeases'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import SignIn from './components/SignIn';
import Home from './components/home';
import Profil from './components/Profil';
import CreateAccount from './components/CreateAccount'
import React, { useState, useEffect } from 'react'
import axios from "axios"
import AddBook from './components/AddBook'
import Admin from './components/Admin';
import DetailBookAdmin from './components/DetailBookAdmin';
import UpdateBook from './components/UpdateBook'
import DetailBookUser from './components/DetailBookUser'
import MyListe from './components/MyListe'
import DetailBookdReserve from './components/DetailBookdReserve'
import Search from './components/Search';
function App() {
  return (
    <>
    <Router>
   
    <Routes>
    
    <Route exact path ="/" element ={<SignIn/>}></Route>
    <Route exact path ="/CreateAccount" element ={<CreateAccount/>}></Route>
    <Route exact path ="/Profil/:name" element ={<Profil/>}></Route>
    <Route exact path ="/Admin" element ={<Admin/>}></Route>
    <Route exact path ="/DetailBookAdmin/:Title" element ={<DetailBookAdmin/>}></Route>
    <Route exact path ="/DetailBookUser/:Title" element ={<DetailBookUser/>}></Route>
    <Route exact path ="/DetailBookdReserve/:Title" element ={<DetailBookdReserve/>}></Route>
    <Route exact path ="/AddBook" element ={<AddBook/>}></Route>
    <Route exact path ="/Update/:Title" element ={<UpdateBook/>}></Route>
    <Route exact path ="/confirm/:Code" element ={<Profil/>}></Route>
    <Route exact path ="/MyList/:username" element ={<MyListe/>}></Route>
    <Route exact path ="/Search/:GENRE" element ={<Search/>}></Route>
    <Route exact path ="/delete-reservation/:Name/:Title" element ={<DetailBookAdmin/>}></Route>
    
    
    
    
    </Routes>
   
    </Router>
    
    </>
  );
}

export default App;
