function calculaCombustivel(distancia, kml, precoGasolina) {
    var consumoTotal = (distancia / kml) * precoGasolina
    return consumoTotal
}

var distancia = parseInt(prompt('Informe a distancia percorrida (em KM): '))
var kml = parseInt(prompt('Informe o consumo do seu veículo (em Km/L): '))
var precoGasolina = parseInt(prompt('Informe o preço da Gasolina em (R$): '))
var consumo = calculaCombustivel(distancia, kml, precoGasolina)

function pula() {
    document.write('<br>')
}

document.write('Distancia percorrida : ' + distancia + ' KM')
pula()
document.write('Autonomia: ' + kml + 'Km/L')
pula()
document.write('Valor do combustível: ' + precoGasolina + ' R$')
pula()
pula()
document.write('O custo será de: ' + consumo + 'R$')