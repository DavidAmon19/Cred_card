let meses = {
    '01': 'Janeiro',
    '02': 'Fevereiro',
    '03': 'Março',
    '04': 'Abril',
    '05': 'Maio',
    '06': 'Junho',
    '07': 'Julho',
    '08': 'Agosto',
    '09': 'Setembro',
    '10': 'Outubro',
    '11': 'Novembro',
    '12': 'Dezembro',
};



for (let i = 1; i <= 9; i++) {
    select_mes.innerHTML += `<option value = "0${i}">${meses["0"+i]}</options>`;
}

for (let i = 10; i <= 12; i++) {
    select_mes.innerHTML += `<option value = "${i}">${meses[i]}</options>`;
}


for (let a = 2023; a <= 2030; a++) {
    let value = a.toString().substr(2, 2)
    select_ano.innerHTML += `<option value = "${value}">${a}</options>`;
}
