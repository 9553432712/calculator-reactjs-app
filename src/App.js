import './App.css';
import Screen from './components/Screen';
import ButtonBox from './components/ButtonBox';
import Button from './components/Button';
import Wrapper from './components/Wrapper';
import React, { useState } from "react";




const btnValues = [
  ["C", "+-", "%", "/"],
  [7, 8, 9, "X"],
  [4, 5, 6, "-"],
  [1, 2, 3, "+"],
  [0, ".", "="],
];

function App() {

  const [calc, setCalc] = useState({
    sign: "",
    res: 0,
    num: 0
  });


  const valueHandler = (e) => {
    console.log('valueHandler {} ', e.target.innerHTML);
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      num: calc.num === 0 ? value : calc.num + value
    })
  }
  const resetClickHandler = (e) => {
    console.log('resetClickHandler {} ', e.target.innerHTML);
    setCalc({
      ...calc,
      num: 0,
      res: 0
    })
  }
  const signClickHandler = (e) => {
    console.log('signClickHandler {} ', e.target.innerHTML);
    const value = e.target.innerHTML;
    setCalc({
      ...calc,
      sign: value,
      res: calc.num,
      num: 0
    })
  }
  const equalsClickHandler = (e) => {
    try {
      console.log('signClickHandler {} ', e.target.innerHTML);
      setCalc({
        ...calc,
        res: math(Number(calc.res), Number(calc.num), calc.sign),
        num: 0
      })
    } catch (error) {
      console.error(error);
    }
  };

  const math = (a, b, sym) => {
    switch (sym) {
      case '+':

        return a + b;
      case '-':
        return a - b;
      case 'X':
        return a * b;
      case '/':
        return a / b;
      default:
        break;
    }
  };

  var result = 'bye';
  try {
    result =
      <Wrapper>
        <Screen value={calc.num ? calc.num : calc.res}></Screen>
        <ButtonBox>
          {
            btnValues.flat().map((obj, i) => {
              return (
                <Button
                  key={i}
                  value={obj}
                  className={obj === '=' ? 'equals' : ''}
                  onClick={obj === 'C' ? resetClickHandler : obj === '+' || obj === '-' || obj === 'X' || obj === '/' ? signClickHandler : obj === '=' ? equalsClickHandler : valueHandler}
                />
              );
            })
          }
        </ButtonBox>
      </Wrapper>
  } catch (error) {
    console.error('error in App ----> ' + error);
  }
  return result;
};


export default App;
