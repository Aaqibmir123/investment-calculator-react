import "./App.css";
import Header from "./components/Header";
import Userinput from "./components/Userinput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
  const [userinput, setuserinput] = useState({
    initialInvestment: 25689,
    annualInvestment: 124579,
    expectedReturn: 65,
    duration: 10,
  });

  const handlerChnage = (newidentifier, newvalue) => {
    setuserinput((prestate) => {
      return {
        ...prestate,
        [newidentifier]: +newvalue,
      };
    });
  };

  const isValidinput = userinput.duration >= 1;
  return (
    <div className="App">
      <Header />
      <Userinput onChange={handlerChnage} Userinput={userinput} />
      {!isValidinput && (
        <p className="center">Please enter a duration greater zero</p>
      )}
      {isValidinput && <Result Userinput={userinput} />}
    </div>
  );
}

export default App;
