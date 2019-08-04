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
  },
  green: {
    backgroundColor: "rgba(0, 128, 0, 0.802)",
  },
  green2: {
    backgroundColor: "rgba(0, 128, 0, 0.802)",
  },
  green3: {
    backgroundColor: "rgba(0, 128, 0, 0.802)",
  },
  red:{
    backgroundColor: "rgba(255, 0, 0, 0.707)",
  },
  red2:{
    backgroundColor:"rgba(255, 0, 0, 0.707)",
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
  const [green,setgreen]=useState(null);
  const [green2,setgreen2]=useState(null);
  const [green3,setgreen3]=useState(null);
  const [red,setred]=useState(null);
  const [red2,setred2]=useState(null);

  function clickbtn(e) {
    e.preventDefault();
    setdivstyle(styles.divon);
    setbtnstyle(styles.btnoff);
    setgamediv(styles.gamedivoff);
    settext("");
    setscores("");
    setrandoms("");
    setrandoms2("");
    setrandoms3("");
    setgreen(null);
    setgreen2(null);
    setgreen3(null);
    setred(null);
    setred2(null);
    
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
          alert("You can not add more like 100$ in game bank.");
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
    setscores("");
    settext("");
    setgreen(null);
    setgreen2(null);
    setgreen3(null);
    setred(null);
    setred2(null);
    if (money2 > 0) {
      const number = Math.floor(Math.random() * 10);
      const number2 = Math.floor(Math.random() * 10);
      const number3 = Math.floor(Math.random() * 10);
    setTimeout(() => {
      setscores(number + number2 + number3);
    }, 480); 
      
        setrandoms(4);
      setrandoms2(9);
      setrandoms3(7);
      
      setTimeout(() => {
        setrandoms(8);
      setrandoms2(1);
      setrandoms3(4);
      }, 60);
      setTimeout(() => {
        setrandoms(0);
      setrandoms2(6);
      setrandoms3(8);
      }, 120);
      setTimeout(() => {
        setrandoms(3);
      setrandoms2(5);
      setrandoms3(2);
      }, 180);
      setTimeout(() => {
        setrandoms(0);
      setrandoms2(9);
      setrandoms3(2);
      }, 240);
      setTimeout(() => {
        setrandoms(5);
      setrandoms2(9);
      setrandoms3(2);
      }, 300);
      setTimeout(() => {
        setrandoms(0);
      setrandoms2(6);
      setrandoms3(8);
      }, 360);
      setTimeout(() => {
        setrandoms(1);
      setrandoms2(3);
      setrandoms3(4);
      }, 420);
      setTimeout(() => {
        setrandoms(number);
      setrandoms2(number2);
      setrandoms3(number3);
      }, 480);
      
    
      if(number === 9 && number2 === 9 && number3 === 9)
      {setTimeout(() => {
        setmoney2(+money2 +250);
        settext("JACKPOT!!! 250$!!!");
      }, 480);
        
      setgreen(styles.green);
      }else if (number === 0 || number2 === 0 || number3 === 0) {
        setTimeout(() => {
          setmoney2(+money2 - 1);
          settext("You hit 0 lost your bet!");
          setred(styles.red);
        }, 480);
      
      } else if (number + number2 + number3 >= 25) {
        setTimeout(() => {
          setmoney2(+money2 + 9);
        setgreen2(styles.green2);
        settext("You won 10$!");
        }, 480);
        
      } else if (number + number2 + number3 >= 16) {
        setTimeout(() => {
          setmoney2(+money2 + 1);
          settext("You won 2$!");
          setgreen3(styles.green3);
        }, 480);
 
      } else {
        setTimeout(() => {
          setmoney2(+money2 - 1);
        settext("Small score you lost your bet!");
        setred2(styles.red2);
        }, 480);
        
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
          
          Your total score is:<input readOnly id="totalscore" value={scores}></input>
        </h1>
        <h1>{text}</h1>
        <ul>
          <li style={green}className="li1">If you hit 3x number 9 win jackpot 250$!</li>
          <li style={green2}className="li1">If your total score is 25 and more you win 10$.</li>
          <li  style={green3}className="li1">If your total score is 16 and more you win 2$.</li>
          <li style={red} id="li4">If your hit 0 in any field you lost bet.</li>
          <li style={red2}id="li5"> If your total score is 15 or less you lost bet.</li>
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
