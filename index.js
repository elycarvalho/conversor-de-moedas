const input1 = document.querySelector('.input1')
const currency1 = document.querySelector('.currency1')
const currency2 = document.querySelector('.currency2')
const displayResult = document.querySelector('.displayResult')
const btnConvert = document.querySelector('.btn-convert')
let currencyValue1 = 0
let currencyValue2 = 0
const currencyValues = [
  {currency:'real', value: 1, region:'Brazil', sign:'R$'},
  {currency:'dolar', value:4.95, region: 'USA', sign:'$'},
  {currency:'euro', value:5.34, region: 'Europe', sign:'€'},
  {currency:'renminbi(Yuan)', value:0.70, region:'China', sign:'¥'},
  {currency:'iene', value:0.034, region:'Japan', sign:'¥'},
  {currency:'bitcoin', value:208770, region:'world', sign:'₿'},
  {currency:'peso arg', value:0.0060, region:'Argentina', sign:'$'},
  {currency:'Rublo', value:0.055, region:'Russia', sign:'₽'}
]

btnConvert.addEventListener('click', () => {
	for (let i = 0; i < currencyValues.length; i++) {
		if(currencyValues[i].currency == currency1.value){
			currencyValue1 = currencyValues[i].value
			var sign1 = currencyValues[i].sign
  	}
  	if(currencyValues[i].currency == currency2.value){
			currencyValue2 = currencyValues[i].value
			var sign2 = currencyValues[i].sign
  	}
  	if(currencyValues[i].currency == 'real'){
		conversion1(sign1)
	  }else{
		conversion2(sign2)
	  }
	}	
})

function conversion1(sign){
  let result = (input1.value * currencyValue1) * currencyValue2
	displayResult.innerHTML = `${sign} ${result.toFixed(2)}`
}

function conversion2(sign){
  let result = (input1.value * currencyValue1) / currencyValue2
	displayResult.innerHTML = `${sign} ${result.toFixed(2)}`
}

