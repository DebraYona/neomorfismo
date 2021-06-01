export interface Current {
  clave: string;
  name: string;
  image: string;
}

const currency: Current[] = [
  {
    clave:"TWC",
    name:"TWINCOIN",
    image:"twin.svg",
  },
  {
    clave:"BTC",
    name:"BITCOIN",
    image:"btc.svg",
  },
  {
    clave:"MXN",
    name:"MXN",
    image:"mxnc.svg",
  },
  {
    clave:"LTC",
    name:"LITECOIN",
    image:"ltc.svg",
  },
  {
    clave:"ETH",
    name:"ETHEREUM",
    image:"eth.svg",
  },
  {
    clave:"XRP",
    name:"RIPPLE",
    image:"xrp.svg",
  },
]

export function SelectCurrent (curren:string):Current{
  console.log("parametro", curren);
  let current:Current 
  currency.map((c) => {    
    
    if(curren === c.clave){
      console.log("ifff",c.clave);
      console.log("ifff",c);
      current = c
    }       
  })
  return current;
   
};