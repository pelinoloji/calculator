import React, { useState } from "react";
import "./App.css";
import Result from "./components/result";
import Operators from "./components/operators";
import Numbers from "./components/numbers";
import operators from "./components/operators";

function App() {
  const [result, setResult] = useState(0);
  const [firtsNum, setFirstNum] = useState("");
  const [secondNum, setSecondNum] = useState("");
  const [operator, setOperator] = useState("");

  const onClickNumbers = number => {
    if (!operator) {
      setFirstNum(firtsNum + number);
    } else {
      setSecondNum(secondNum + number);
    }
  };

  const onClickOperator = operatorType => {
    if (operatorType === "clear") {
      setResult(0);
      setFirstNum("");
      setSecondNum("");
      setOperator("");
    } else {
      if (firtsNum) {
        if (secondNum) {
          if (operatorType === "=") {
            const sonuc =
              operator === "+"
                ? parseInt(firtsNum) + parseInt(secondNum)
                : parseInt(firtsNum) - parseInt(secondNum);
            setResult(sonuc);
          } else {
            const sonuc =
              operator === "+"
                ? parseInt(firtsNum) + parseInt(secondNum)
                : parseInt(firtsNum) - parseInt(secondNum);
            setFirstNum(sonuc);
            setSecondNum("");
          }
        }

        // if (secondNum && operatorType === "=") {
        //   if (operator === "+") {
        //     setResult(parseInt(firtsNum) + parseInt(secondNum));
        //   } else {
        //     setResult(parseInt(firtsNum) - parseInt(secondNum));
        //   }
        // } else if (secondNum && operatorType !== "=") {
        //   if (operator === "+") {
        //     setFirstNum(parseInt(firtsNum) + parseInt(secondNum));
        //     setSecondNum("");
        //   } else {
        //     setFirstNum(parseInt(firtsNum) - parseInt(secondNum));
        //     setSecondNum("");
        //   }
        // }

        if (operatorType !== "=") {
          setOperator(operatorType);
        }
      }
    }
  };

  const isOperatorDisabled = operatorType => {
    if (!firtsNum) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div className="App">
      <Result
        result={result}
        first={firtsNum}
        second={secondNum}
        operator={operator}
      />
      <Operators
        isDisabled={isOperatorDisabled}
        onClickOperator={onClickOperator}
      />
      <Numbers onClickNumbers={onClickNumbers} />
    </div>
  );
}

export default App;
