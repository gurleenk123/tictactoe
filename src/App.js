import React,{useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Card,CardBody,Container,Col,Button } from 'reactstrap';
import Icon from './Icons'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.jpg';
const itemArray=new Array(9).fill("empty");

const App=()=> {

  const [isCross,setCross]=useState(false);
  const [winner,setWinner]=useState("");
  const [start,setStart]=useState("Start Game");
  const [chh,setchh]=useState("");
  const [img,setImg]=useState(true);
  const reloadGame = () => {
    setCross(false);
    setWinner("");
    setStart("Play Again");

    //make array again empty size again 9
    itemArray.fill("empty",0,9);
  };

  const checkIsWinner = () => {
    setStart("");
    //
    if (
      itemArray[0] === itemArray[1] &&
      itemArray[0] === itemArray[2] &&
      itemArray[0] !== "empty"
    ) {
      setWinner(` Wohooo 🥳 🎉${itemArray[0]} won 🏆`);
    } else if (
      itemArray[3] !== "empty" &&
      itemArray[3] === itemArray[4] &&
      itemArray[4] === itemArray[5]
    ) {
      setWinner(` Wohooo 🥳 🎉${itemArray[3]} won 🏆`);
    } else if (
      itemArray[6] !== "empty" &&
      itemArray[6] === itemArray[7] &&
      itemArray[7] === itemArray[8]
    ) {
      setWinner(` Wohooo 🥳 🎉${itemArray[6]} won 🏆`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[3] &&
      itemArray[3] === itemArray[6]
    ) {
      setWinner(`Wohooo 🥳 🎉${itemArray[0]} won 🏆`);
    } else if (
      itemArray[1] !== "empty" &&
      itemArray[1] === itemArray[4] &&
      itemArray[4] === itemArray[7]
    ) {
      setWinner(`Wohooo 🥳 🎉${itemArray[1]} won 🏆`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[5] &&
      itemArray[5] === itemArray[8]
    ) {
      setWinner(`Wohooo 🥳 🎉${itemArray[2]} won 🏆`);
    } else if (
      itemArray[0] !== "empty" &&
      itemArray[0] === itemArray[4] &&
      itemArray[4] === itemArray[8]
    ) {
      setWinner(`Wohooo 🥳 🎉${itemArray[0]} won 🏆`);
    } else if (
      itemArray[2] !== "empty" &&
      itemArray[2] === itemArray[4] &&
      itemArray[4] === itemArray[6]
    ) {
      setWinner(`Wohooo 🥳 🎉${itemArray[2]} won 🏆`);
    }

  };

  const changeItem = itemNumber => {
    //itemNumber is box number
    setStart("Start Game");
    
    if (winner) {
      return toast(winner, { type: "success" });
    }

    if (itemArray[itemNumber] === "empty") {
      itemArray[itemNumber] = isCross ? "cross" : "circle";
      setCross(!isCross);
    } else {
      return toast("already filled", { type: "error" });
    }

    checkIsWinner();

    
  };




  return (
    <div className="App">
  
   <Container className="p-5 ">
      <ToastContainer position="bottom-center" />
      <h1 style={{color:'#98A9EA',fontSize:'70px'}} className="text-center">TIC TAC TOE</h1>
      <br></br>
      <br></br>
      
    {start!=="" ?  <div class="text-center block">
      <Button color="success"  onClick={()=>{setchh("done"); setImg(false);}} size="lg" className=" btn btn-block">START GAME</Button>
    </div> :  <div class="text-center block">
      <Button color="danger"  onClick={reloadGame} size="lg" className=" btn btn-block">RELOAD GAME</Button>
    </div>}
    {img ?<div className="text-center"> <img src={logo} width="300" height="300" alt="logo"></img></div> : null}
     
   

     

        <Col md={6} className="offset-md-3">
        {winner ? (
          <>
       
     
              <div class="text-center ">
              <br></br>
      <Button color="info"  onClick={reloadGame} size="lg" > Play Again!!!!</Button>
    </div>

          <div className="mb-4 mt-4">
            <h2 className="text-warning text-uppercase text-center ">{winner}</h2>
          
          </div>
        </>
        ) : (
          <>
         

          
        
              </>

        ) }
        {chh!=='' ?  
        <>
        <h1 className="text-warning text-center ">{isCross ? "Cross" : "Circle"} turns</h1> 

          <div className="grid">
          
          

            {itemArray.map((item, index) => (
              <Card style={{backgroundColor:'#34427D'}} onClick={()=>changeItem(index) }>
                <CardBody className="box">
                  <Icon name={item} />
                </CardBody>
              </Card>
            ))}
          </div></>: null }
      
        </Col> 
      
     
    </Container>
    <footer className="text-center" style={{color:'#98A9EA'}} >Made by gurleen🤍</footer>

     
    </div> 
    

  );
}

export default App;
