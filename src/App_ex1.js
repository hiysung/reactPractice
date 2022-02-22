// import Button from "./component/Button";
import styles from "./css/App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue((prev) => prev +1);
  const onChange = (event) => setKeyword(event.target.value);
  const [showing, setShowing] = useState(false);
  const onShowing = () => {
    setShowing((prev) => !prev);
  }
  // console.log("i run all the time.");
  const iRunOnlyOnce = () => {
    console.log("i run only once.");
  }
  useEffect(iRunOnlyOnce, []);
  useEffect(() => {
    if(keyword !== "" && keyword.length > 5) {
      console.log("i run when 'keyword' changes.");
    }
  }, [keyword]);
  useEffect(() => {
    console.log("i run when 'counter' changes.");
  }, [counter]);
  useEffect(() => {
    console.log("i run when 'counter&keyword' changes.");
  }, [counter, keyword]);
  
  function Hello() {
    function HiFunc() {
      console.log("Hi :)");
      return ByeFunc;
    }
    function ByeFunc() {
      console.log("Bye :(");
    }
    useEffect(HiFunc, []);
    return <h1>Hello</h1>
  }

  return (
    <div>
      <input type="text" placeholder="Search here..." onChange={onChange}></input>
      <h1 className={styles.title}>{counter}</h1>
      {/* <Button onClick={onClick} text={"Continue"} /> */}
      {showing ? <Hello /> : null}
      <button onClick={onShowing}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App;
