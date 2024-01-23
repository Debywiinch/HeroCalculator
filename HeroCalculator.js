let heroes = ['Sova', 'Hotelã', 'Japones', 'Gibimba', 'DeusReyna'];
let score = [2001, 8001, 1001, 1234, 12527]

for (let i = 0; i < heroes.length; i++) {
    if (score[i] <= 1000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de ferro')
    } else if (score[i] <= 2000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Bronze')
    } else if (score[i] <= 5000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Prata')
    } else if (score[i] <= 7000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Ouro')
    } else if (score[i] <= 8000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Platina')
    } else if (score[i] <= 9000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Ascendente')
    } else if (score[i] <= 10000) {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Imortal')
    } else {
        console.log('O Heroi de nome ' + heroes[i] + ' está no nível de Radiante')
    }
}