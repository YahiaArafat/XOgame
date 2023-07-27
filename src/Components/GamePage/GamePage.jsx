import React, { useState } from 'react';
import Lottie from "lottie-react";
import GameJo from '../../Assets/gameJO.json'


export default function GamePage() {
  document.getElementsByClassName('Playar').innerHTML = 'Playar1'
  let round ='x';
  let array = []
  let Ai = 'X'
  let Hu = 'O'
  let currentPlayer = Hu
  let scores = {
    'X':1,
    'O': -1,
    'tie: ':0
  }
  const [Players,setPlayers] = useState('P1');
  const [Level,setLevel] = useState('EE');
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedLevel, setselectedLevel] = useState('');


    // //////////////////////////////////////////////////////////////////////////////////////////////////////////////

  function handleId (e) {

     if(Players === 'P2'){

      let id= e.target.id;
      let innerID= document.getElementById(id).innerHTML
      document.querySelector('.Playar').innerHTML = 'Playar1' 
        console.log(id);
      console.log(innerID);
      console.log("KKKKKKKKKKKK");
  
      if(round==='x' && innerID == ''){
        document.getElementById(id).innerHTML = 'X'
        round = 'o'
        // document.getElementsByClassName('Playar').innerHTML= 'Playar2'
        document.querySelector('.Playar').innerHTML = 'Playar2'
      }else if(round==='o' && innerID == ''){
        document.getElementById(id).innerHTML = 'O'
        round = 'x'
        document.querySelector('.Playar').innerHTML = 'Playar1'
  
      }
      winner();

  }else{///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    let id = e.target.id;
    let innerID = document.getElementById(id).innerHTML;
    document.querySelector('.Playar').innerHTML = 'Player1';
    console.log(id);
    // console.log(innerID);

    

    console.log("nnnnnnnnnnnnnnnnn")
    if(Level === 'EE'){
      console.log("EEEEEEEEEE")
    }else if(Level === 'MM'){
      console.log("MMMMMMMMM")
    }else {


      if(currentPlayer == Hu && innerID == ''){
        document.getElementById(id).innerHTML = 'O'
        console.log(currentPlayer)

        currentPlayer = Ai
        console.log('aaaaaaaaaaaaaaaaaaaa')
        console.log('aaaaaaaaaaaaaaaaaaaa')

        document.querySelector('.Playar').innerHTML = 'Playar2'
  
      }else if(currentPlayer == Ai && innerID == ''){
        console.log('bbbbbbbbbbbbbbb')
        bestMove()
        console.log("HHHHHHHHHH")
        
        function bestMove(){
          let bestScore = -Infinity
          let Move  
          for(let i=1 ; i<10 ; i++){
            array[i] = document.getElementById('Square' +i ).innerHTML
            if( array[i] == ''){
              console.log("uuuuuuuuuu")
              array[i] = Ai
              let score = minimax(array,0,true)
              array[i] = ''
              if(score > bestScore){
                bestScore = score
                Move = {i}
                console.log('**************')
              }
             
            }
            array[Move] = Ai
            // document.querySelector('.`${Move}`').innerHTML = Ai
            // arrayMove] = (document.getElementById(id).innerHTML = Ai)
            // document.getElementById('Square'+ move).innerHTML = Ai
            // document.querySelector('.Square1').innerHTML = 'Playar2'
            
            currentPlayer = Hu
          }
        }
  
     
      function minimax(array, depth, isMax){
        let res= winner()
        if(res !== null){
          return scores[res]
        
        }
  
        if(isMax){
          let bestScore = -Infinity
          for(let i=1 ; i<10 ; i++){
            array[i] = document.getElementById('Square' +i ).innerHTML
            if( array[i] == ''){
              array = Ai
              let score = minimax(array, depth +1, false)
              array[i] =''
              if(score > bestScore){
                bestScore = score
              }
            }
          }
          return bestScore
        }else{
          let bestScore = Infinity
          for(let i=1 ; i<10 ; i++){
            array[i] = document.getElementById('Square' +i ).innerHTML
            if( array[i] == ''){
              array = Hu
              let score = minimax(array, depth +1, true)
              array[i] =''
              if(score < bestScore){
                bestScore = score
              }
            }
          }
          return bestScore
        }
      }
        // document.getElementById(id).innerHTML = 'X'
        // currentPlayer = Hu
        document.querySelector('.Playar').innerHTML = 'Playar1'
      }
 

    }//if 2
   

   
  }//ifff
   
  }
  // //////////////////////////////////////////////////////////////////////////////////////////////////////////////

function HowEnd(n1,n2,n3){
  document.getElementsByClassName('Playar').innerHTML = `${array[n1]} Winner`
  document.getElementById('Square'+ n1).style.background = '#229954'
  document.getElementById('Square'+ n2).style.background = '#229954'
  document.getElementById('Square'+ n3).style.background = '#229954'

  // console.log(document.getElementsByClassName('Playar').innerHTML)
  if(round==='x'){
    document.querySelector('.Playar').innerHTML = 'Playar2 is Winner'
    console.log('=========')
  }else{
    document.querySelector('.Playar').innerHTML = 'Playar1 is Winner'
    console.log('+++++++++')

  }
  
  // setInterval(() => {document.querySelector('.Playar').innerHTML += 'is Winner' }, 5000);
  setTimeout(() => window.location.reload(), 5000);
}
  
  function winner (e){
    // let id= e.target.id;
    console.log("hhhhhhhhhhhhhhhhhh")
    for(let i=1 ; i<10 ; i++){
      array[i] = document.getElementById('Square' +i ).innerHTML
      console.log(array[i])
    }

    // for col //////////////////////
    if(array[1] == array[2] && array[2]== array[3] && array[1] != ''){
      console.log("ggggggg")
      HowEnd(1,2,3)
     
    }
    if(array[4] == array[5] && array[5]== array[6] && array[4] != ''){
      console.log("ggggggg")
      HowEnd(4,5,6)
    }
    if(array[7] == array[8] && array[8]== array[9] && array[7] != ''){
      console.log("ggggggg")
      HowEnd(7,8,9)
    }

    // for row /////////////
    if(array[1] == array[4] && array[4]== array[7] && array[7] != ''){
      console.log("ggggggg")
      HowEnd(1,4,7)
    }
    if(array[2] == array[5] && array[5]== array[8] && array[8] != ''){
      console.log("ggggggg")
      HowEnd(2,5,8)
    }
    if(array[3] == array[6] && array[6]== array[9] && array[9] != ''){
      console.log("ggggggg")
      HowEnd(3,6,9)
    }

    // for Diagonal ///////////////////
    if(array[1] == array[5] && array[5]== array[9] && array[9] != ''){
      console.log("ggggggg")
      HowEnd(1,5,9)
    }
    if(array[3] == array[5] && array[5]== array[7] && array[7] != ''){
      console.log("ggggggg")
      HowEnd(3,5,7)
    }
  }


  function handleSelectChange (e){   //for 1 playar
    setselectedLevel(e.target.value);
    document.querySelector('.Playar').innerHTML = 'Playar1'  /// how start 
    let id= e.target.id;
    let innerLevel= document.getElementById(id).value    
    setLevel(innerLevel) 
    console.log(Level)
  }


  function handleSelectChangePlayer (e){   // for 2 playar
    setSelectedOption(e.target.value);
    document.querySelector('.Playar').innerHTML = 'Playar1' 
    // console.log(selectedOption);
    let id= e.target.id;
    let innerOpion= document.getElementById(id).value    
    setPlayers(innerOpion) 
    console.log(Players)
    
  }


  function RestartGame(){
    setTimeout(() => window.location.reload(), 100);
  }


  return (
    <>
      <Lottie className="GameJo col-12 " animationData={GameJo} />

      <div className="row LevelGame">
        <div className="col-md-6 d-flex justify-content-end">
          Playing Level:
        </div>
        <div className="col-md-6 fw-bold mt-1  w-25">
          <select className="form-select" id='PlayersLevel' value={selectedLevel} onChange={handleSelectChange} aria-label="Default select example">
            <option value="EE" id="E" >
              Easy
            </option>
            <option value="MM" id="M" >
              Middle{" "}
            </option>
            <option value="HH" id="H" >
              Hard
            </option>
          </select>
        </div>
      </div>
      <div className="row LevelGame">
        <div className="col-md-6 d-flex justify-content-end">
          Players:
        </div>
        <div className="col-md-6 fw-bold mt-1  w-25">
          <select className="form-select" id='PlayersOP' value={selectedOption} onChange={handleSelectChangePlayer} aria-label="Default select example">
            <option value="P1" id="Players1" >
            1 Player
            </option>
            <option value="P2" id="Players2" >
            2 Player
            </option>
           
          </select>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 Playar "></div>
      </div>
      <div className="row ">
        <div className="ParentTable col-md-12  my-4">
          <table className="MyTable table-bordered border-dark border-5 table-responsive-md  col-md-8   table-dark">
            <tbody>
              <tr>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square1"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square2"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square3"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square4"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square5"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square6"
                    onClick={handleId}
                  >

                  </div>
                </td>
              </tr>
              <tr>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square7"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square8"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
                <td className="col-md-4">
                  <div
                    className=" w-100 h-100  bold fw-bold   AddAccount"
                    id="Square9"
                    onClick={handleId}
                  >
                    
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <button className="btn w-25  bold fw-bold  RestBtn  " onClick={RestartGame}>
            Restart Game
          </button>
        </div>
      </div>

      <footer className="footer col-md-12 mt-3">
        <div className="footer-content">
          <div className="footer-row ">
            <div className="footer-col  ">
              <h4>Follow us</h4>
              <div className="social-footer">
                <a href="https://www.facebook.com/profile.php?id=100003123962089">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="https://twitter.com/">
                  <i className="fab fa-twitter" />
                </a>
                <a href="https://www.instagram.com/">
                  <i className="fab fa-instagram" />
                </a>
                <a href="https://www.linkedin.com/in/yahia-arafat-130b56220/">
                  <i className="fab fa-linkedin" />
                </a>
              </div>
            </div>
          </div>

          <div className="footer-row ">
            <div className="fw-bold last ">
              <span>© Dec-2022 All rights reserved.</span>
              <span>
                Terms · Privacy Policy For Tic-Tac-Toe Game using React.Js
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
