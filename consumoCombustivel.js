function calculaCombustivel(distancia, kml, precoGasolina) {
    var consumoTotal = (distancia / kml) * precoGasolina
    return consumoTotal
}

var distancia = prompt('Informe a distancia percorrida (em KM): ')
var kml = prompt('Informe o consumo do seu veículo (em Km/L): ')
var precoGasolina = prompt('Informe o preço da Gasolina em (R$): ')
var consumo = calculaCombustivel(distancia, kml, precoGasolina)

function pula() {
    document.write('<br>')
}


document.write('Distancia percorrida: ' + distancia)
pula()
document.write('Km/L: ' + kml)
pula()
document.write('Valor do combustível: ' + precoGasolina)
pula()
pula()
document.write('O custo será de: ' + consumo + 'R$')
