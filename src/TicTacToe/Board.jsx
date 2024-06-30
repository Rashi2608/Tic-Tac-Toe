import React,{useState} from 'react'
import Box from './Box';
import img1 from '../images/img1.jpg'
const Board = () => {
    const [state,setState]=useState(Array(9).fill(null));
    const [isXTurn,setIsXTurn]=useState(true);

    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];

        for (let logic of winnerLogic){
            const [a,b,c]=logic;
            if (state[a]!==null && state[a]===state[b] && state[a]===state[c]){
                return state[a];
            }
        } 

        return null;
    };

    const checkDraw=()=>{
      return state.every((cell)=>cell!==null)&& !checkWinner();
    }

    const isWinner=checkWinner();
    const isDraw=checkDraw();

    const  handleClick=(index)=>{
        if (state[index]!==null){
            return;
        }
        const copyState=[...state];
        copyState[index]= isXTurn?'X':'O';
        setState(copyState);
        setIsXTurn(!isXTurn)
    };

    const handleAgain=()=>{
        setState(Array(9).fill(null));
    }
  return (
    <div className='game-board' >
        {isWinner?<> 
          <h1 align='center'>Tic-Tac-Toe</h1>
          <hr/>
        <div className='mt-5'><h3 align='center' >
        Player {isWinner} won the game!!{""}</h3>
        <h3 align='center'><button onClick={handleAgain} style={{background:'#e6e6fa',height:'30px',width:"100px"}}>Play Again</button></h3>
        <div className='box'>
            <div className='board-row'>
              <Box onClick={()=>handleClick(0)} value={state[0]}/>
              <Box onClick={()=>handleClick(1)} value={state[1]}/>
              <Box onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className='board-row'>
              <Box onClick={()=>handleClick(3)} value={state[3]}/>
              <Box onClick={()=>handleClick(4)} value={state[4]}/>
              <Box onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className='board-row'>
              <Box onClick={()=>handleClick(6)} value={state[6]}/>
              <Box onClick={()=>handleClick(7)} value={state[7]}/>
              <Box onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
          </div>
        </div>
        </>:<div>{isDraw?
           <> 
          <div>
          <h1 align='center'>Tic-Tac-Toe</h1>
          <hr/>
          <h3 align='center' >
          It's a Draw...NO one won{""}</h3>
          <h3 align='center'><button onClick={handleAgain} style={{background:'#e6e6fa',height:'30px',width:"100px",border:"none",borderRadius:"20px"}}>Play Again</button></h3>
          <div className='box'>
            <div className='board-row'>
              <Box onClick={()=>handleClick(0)} value={state[0]}/>
              <Box onClick={()=>handleClick(1)} value={state[1]}/>
              <Box onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className='board-row'>
              <Box onClick={()=>handleClick(3)} value={state[3]}/>
              <Box onClick={()=>handleClick(4)} value={state[4]}/>
              <Box onClick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className='board-row'>
              <Box onClick={()=>handleClick(6)} value={state[6]}/>
              <Box onClick={()=>handleClick(7)} value={state[7]}/>
              <Box onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
          </div>
          </div>
          </>:<>
          <h1 align='center'>Tic-Tac-Toe  </h1>
          <hr/>
        <div className='box'>
        <h3 align='center'>Player {isXTurn?'X':'O'} turn </h3>
      <div className='board-row'>
        <Box onClick={()=>handleClick(0)} value={state[0]}/>
        <Box onClick={()=>handleClick(1)} value={state[1]}/>
        <Box onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className='board-row'>
        <Box onClick={()=>handleClick(3)} value={state[3]}/>
        <Box onClick={()=>handleClick(4)} value={state[4]}/>
        <Box onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className='board-row'>
        <Box onClick={()=>handleClick(6)} value={state[6]}/>
        <Box onClick={()=>handleClick(7)} value={state[7]}/>
        <Box onClick={()=>handleClick(8)} value={state[8]}/>
      </div>
      </div>
      </>}
      </div>}
    </div>
  )
}

export default Board;
