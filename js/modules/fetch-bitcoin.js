export default function initFetchBitcoin() {}

fetch('https://blockchain.info/ticker').then((response) =>
  response
    .json()
    .then((jsonX) => {
      const btcPreco = document.querySelector('.btc-preco');
      btcPreco.innerText = (100 / jsonX.BRL.sell).toFixed(4);
      console.log(btcPreco);
    })
    .catch((error) => {
      Error(error);
    }),
);
