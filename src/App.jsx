import { useState } from "react";
import Die from "./components/Die"
import { nanoid } from "nanoid";
import ReactConfetti from "react-confetti";

function App() {

  const[numbers, setNumbers] = useState(allNewNumbers())

  const gameWon = numbers.every(e => e.isFixed) && numbers.every(e => e.num === numbers[0].num)

  function allNewNumbers(){
    let arr = [];
    for(let i = 0; i < 10; i++){
      arr.push({num : Math.ceil(Math.random()*6), isFixed : false, id: nanoid()});
    }
    return arr;
  }

  function handleDiceRoll(){
    if(gameWon){
      setNumbers(allNewNumbers());
      return;
    }
    const arr = numbers.map(e => {
      if(e.isFixed === false) e.num =  Math.ceil(Math.random()*6);
      return e
    })
    setNumbers(arr)
  }

  function fixed(id){
    const arr = numbers.map(e => {
      if(e.id === id) e.isFixed = !e.isFixed;
      return e
    })
    setNumbers(arr);
  }

  return (
    <>
      {gameWon && <ReactConfetti />}
      <main className="flex justify-center items-center w-full min-h-screen bg-[#0B2434]">
        <div className="bg-[#F5F5F5] flex flex-col justify-evenly items-center w-[90vw] h-[80vh] rounded-xl">
        <h1 className="text-5xl font-bold">Dice Frenzy</h1>
        <div className="px-8 text-center text-xl">
          <p>Roll until all dice are the same.</p>
          <p>Click each die to freeze it at its current value between rolls.</p>
        </div>
          <div className="grid grid-rows-2 grid-cols-5 gap-5">
            {numbers.map((e) => (
              <Die key={e.id} value={e.num} isFixed={e.isFixed} fixed={fixed} id = {e.id}/>
            ))}
          </div>
          <button className="text-white px-10 py-2 rounded-lg font-bold text-lg flex justify-center items-center bg-[#5035FF] cursor-pointer"
          onClick={handleDiceRoll}
          >{gameWon ? "New Game" : "Roll"}</button>
        </div>
      </main>
    </>
  )
}

export default App
