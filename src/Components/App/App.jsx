import React,{useState,useEffect}from 'react'
import { Route, Routes } from 'react-router-dom';
import GamePage from './../GamePage/GamePage';

export default function App() {

  return (

    <>
    <div className="container ">

    <Routes>
      <Route path='/' element={<GamePage/>}> </Route> 
      <Route path='GamePage' element={< GamePage/>} > </Route> 
    </Routes>
    </div>

    </>
  )
}
