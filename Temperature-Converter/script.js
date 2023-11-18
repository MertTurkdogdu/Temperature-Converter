function convertToCelcius(fah){
  let = Celcius = (fah-32) * (5/9)
  Celcius = Celcius.toFixed(1)
  console.log(`It's = ${Celcius} C`);
  document.querySelector("#getCelcius").value = Celcius;
}

function convertToFahrenheith(cel){
  let = Fahrenheith = (cel * 9/5) + 32
  Fahrenheith = Fahrenheith.toFixed(1)
  console.log(`It's = ${Fahrenheith} F`);
  document.querySelector("#getFahrenheith").value = Fahrenheith;
}