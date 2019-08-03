import React, {useState } from "react";

const styles = {
  div: {
    display: "none"
  },
  divon: {
    backgroundColor: "white",
    height: 365,
    width: "auto",
    opacity: 0.7,
    borderRadius: 30
  },
  btnoff: {
    display: "none"
  },
  btnon: {
    height: 150,
    height: 150,
    width: 150,
    borderRadius: "50%",
    fontSize: "30px",
    backgroundcolor: "rgba(255, 255, 255, 0.469)",
    border: "3px solid white"
  },
  gamediv: {
    backgroundColor: "silver",
    height: 690,
    opacity: 0.8
  },
  gamedivoff: {
    display: "none"
  }
};

const NumberGame = () => {
  const [divstyle, setdivstyle] = useState(styles.div);
  const [btnstyle, setbtnstyle] = useState(styles.btnon);
  const [money, setmoney] = useState("");
  const [money2, setmoney2] = useState(0);
  const [gamediv, setgamediv] = useState(styles.gamedivoff);
  const [randomn, setrandoms] = useState("");
  const [randomn2, setrandoms2] = useState("");
  const [randomn3, setrandoms3] = useState("");
  const [scores, setscores] = useState("");
  const [text, settext] = useState("");
  const[moneywithdraw,setmoneywithdraw]= useState("");

  function clickbtn(e) {
    e.preventDefault();
    setdivstyle(styles.divon);
    setbtnstyle(styles.btnoff);
    setgamediv(styles.gamedivoff);
  }

  function addmoney() {
    if (money > 0) {
      if (money2 === 0) {
        if (money > 100) {
          alert("Maximum deposit is 100$.");
          setmoney("");
        } else {
          setmoney2(money);
          setmoney("");
        }
      } else {
        if (+money + +money2 > 100) {
          alert("Maximum 100$ in game bank.");
          setmoney("");
        } else {
          setmoney2(+money + +money2);
          setmoney("");
        }
      }
    } else {
      alert("ERROR You can not have negative deposit or 0.");
      setmoney("");
    }
  }

  function moneychange(e) {
    e.preventDefault();
    const a = e.target.value;
    setmoney(a);
  }
  function moneychange2(c) {
    c.preventDefault();
    const b = c.target.value;
    setmoneywithdraw(b);
  }


  function withdrawmoney(){ 
    if( moneywithdraw <= 0){alert('You cannot withdraw nothing or 0.');setmoneywithdraw("");
  }else{
    if(moneywithdraw>money2){alert('You can not withdraw more like you have in your game bank.');setmoneywithdraw("");
  }else{setmoney2(money2-moneywithdraw);setmoneywithdraw("");



  }

   
}
  }

  function startgame() {
    if (money2 > 0) {
      setgamediv(styles.gamediv);
      setdivstyle(styles.div);
    } else {
      alert("Make your deposit first, you dont have any money in game bank.");
    }
  }

  function random() {
    settext("");
    if (money2 > 0) {
      const number = Math.floor(Math.random() * 10);
      const number2 = Math.floor(Math.random() * 10);
      const number3 = Math.floor(Math.random() * 10);
      setscores(number + number2 + number3);
      setrandoms(number);
      setrandoms2(number2);
      setrandoms3(number3);
      if(number === 9 && number2 === 9 && number3 === 9)
      {setmoney2(+money2 +250);settext("JACKPOT!!! 250$!!!");
      }else if (number === 0 || number2 === 0 || number3 === 0) {
        setmoney2(+money2 - 1);
        settext("You hit 0 lost your bet!");
      } else if (number + number2 + number3 >= 25) {
        setmoney2(+money2 + 9);
        settext("You won 10$!");
      } else if (number + number2 + number3 >= 16) {
        setmoney2(+money2 + 1);
        settext("You won 2$!");
      } else {
        setmoney2(+money2 - 1);
        settext("Small score you lost your bet!");
      }
    } else {
      alert(
        "You dont have enought money in game bank please make deposit or return to menu."
      );
      setscores("");
      setrandoms("");
      setrandoms2("");
      setrandoms3("");
    }
  }

  return (
    <div>
      <h1 id="rollgame">ROLL GAME</h1>
      <button id="btn" style={btnstyle} onClick={clickbtn}>
        START
      </button>
      <div style={divstyle}>
        <h1 id="maked">Make your deposit (Maximum 100$ in game bank).</h1>{" "}
       <input
          id="inputDeposit"
          type="number"
          placeholder="Deposit value"
          value={money}
          onChange={moneychange}
        ></input>
        <button onClick={addmoney} id="btnok">
          DEPOSIT
        </button><br/>
       <div id="withdrawarea"> <input
          id="withdraw"
          type="number"
          placeholder="Withdraw value"
          value={moneywithdraw}
          onChange={moneychange2}
        ></input>
        <button id="btnreset" onClick={withdrawmoney}>
        Withdraw
        </button></div>
        <h1>Game bank: {money2}$</h1>
    
        <br />
        <br />
        <button onClick={startgame} id="btnstart">
          START GAME
        </button>
      </div>
      <div style={gamediv}>
        
        <div>
          <h3 id="bank">Game bank: {money2}$</h3>
          <input className="inputgame" readOnly value={randomn}></input>
          <input className="inputgame" readOnly value={randomn2}></input>
          <input className="inputgame" readOnly value={randomn3}></input>
          <button id="roll" onClick={random}>
            BET 1$
          </button>
        </div>
        <h1>
          {" "}
          Your total score is:<input readOnly id="totalscore" value={scores}></input>
        </h1>
        <h1>{text}</h1>
        <ul>
          <li className="li1">If you hit 3x number 9 win jackpot 250$!</li>
          <li className="li1">If your total score is 25 and more you win 10$.</li>
          <li className="li1">If your total score is 16 and more you win 2$.</li>
          <li id="li4">If your hit 0 in any field you lost bet.</li>
          <li id="li5"> If your total score is 15 or less you lost bet.</li>
        </ul>
        <input
          id="inputfast"
          onChange={moneychange}
          value={money}
          type="number"
        ></input>
        <button id="fastdeposit" onClick={addmoney}>
          FAST DEPOSIT
        </button>
        <br />
        <br />
        <br />
        <br />
        <button onClick={clickbtn} id="return">
          Return
        </button>
      </div>
    </div>
  );
};

export default NumberGame;
