import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const [amount, setAmount] = useState(0);
  const [index, setIndex] = useState(0);
  const [coinCnt, setCoinCnt] = useState(0);
  const onChange = (event) => setAmount(event.target.value);
  const onSelect = (event) => setIndex(event.target.value);
  const onClick = () => {
    setCoinCnt((amount / coins[index].quotes.USD.price).toFixed(12));
  }
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map((coin, index) => (
            <option key={coin.id} value={index}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price}
            </option>
          ))}
        </select>
      )}
      {loading ? null : (
        <div>
          <hr />
          <div>
            <input type="text" placeholder="How much do you have $" value={amount} onChange={onChange}></input>
            <button onClick={onClick}>Convert</button>
          </div>
          <div>
            <input type="text" placeholder="This is Coin" value={coinCnt +" ("+ coins[index].symbol+")"} disabled></input>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
