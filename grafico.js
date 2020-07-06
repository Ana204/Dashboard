function criarGrafico(nome, dadosGrafico)
{
    var ctx = document.getElementById(nome).getContext('2d');
    var chart = new Chart(ctx, {

        //tipo do grafico 
        type: 'line',

        // paramentros do grafico no qual eu copio e colo do site
        data: {
            labels: dadosGrafico['eixoX'],
            datasets: [{
                label: dadosGrafico.indicar_local,
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45]
            }]
        },

        // opções de configurações 
        options: {}
    });
}

var dadosGrafico = { 
 "indicar_local": "Sp",
 "eixoX": ['11:50', '12:50', '13:50', '14:50', '15:50' ,'16:50', '17:50'],
 "temperatura_dias": [31, 31, 31.5, 25, 27.5, 20.8, 30]
}

var dadosGrafico2 = { 
    "indicar_local": "Minas",
    "eixoX": ['11:50', '12:50', '13:50', '14:50', '15:50' ,'16:50', '17:50'],
    "temperatura_dias": [31, 31, 31.5, 25, 27.5, 20.8, 30]
   
   }
//Chamando função
criarGrafico("grafico1", dadosGrafico)
criarGrafico("grafico2", dadosGrafico2)  
