function transformDate(date) {
    let splDate = date.split('-');

    let day = parseInt(splDate[0]);
    let month = parseInt(splDate[1]);
    let year = parseInt(splDate[2]);

    return `${day} de ${getStringMonth(month)} de ${year}`;
}

function getStringMonth(month) {
    let months = [
         'Janeiro'
        ,'Fevereiro'
        ,'Março'
        ,'Abril'
        ,'Maio'
        ,'Junho'
        ,'Julho'
        ,'Agosto'
        ,'Setembro'
        ,'Outubro'
        ,'Novembro'
        ,'Dezembro'
    ];
    return months[month - 1];
}

module.exports = {
    transformDate
}