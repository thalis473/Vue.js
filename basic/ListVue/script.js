let application =new Vue({
    el: '#app',
    data:{
        colecaoUsuarios:[
            "Thalis",
            "Joaquim",
            "Rita",
            "josafina",
            "Abimeleque"
        ]
    }
}) 

var app =new Vue({
    el: '#listaindice',
    data:{
        colecaoUsuarios:[
            "Thalis",// Posição 0
            "Joaquim", //Posiçao 1
            "Rita", // Posição 2
            "josafina",
            "Abimeleque"
        ]
    }
}) 

const applisten =new Vue({
    el: '#listaProdutos',
    data:{
        colecaoProdutos:[
           {id:1 ,nome: 'Moto g9', valor: 1400},
           {id:2 , nome:'iphone X', valor:7000},
           {id:3 , nome: 'Galax S20', valor: 3200}
        ]
    }
}); 

const appJs =new Vue({
    el: '#listaJs',
    data:{
        colecaoTecnologias:[
          {nome:'React',
          dados:{Stack :'Front-end', Tipo:'Biblioteca'}
          },
          {nome:'Vue.js',
          dados:{Stack :'Front-end', Tipo:'Framework'}
          },
          {nome:'React Native',
          dados:{Stack :'Front-end', Tipo:'Framework'}
          },
          {nome:'Node.js',
          dados:{Stack :'Back-end', Tipo:'Interpretador'}
          },
        ]
    }
}); 

const appIf =new Vue({
    el: '#listenIf',
    data:{
        colecaoCandidatos:[
            { id: 1, nome: "Douglas", pontos: 550, aprovado: true },
            { id: 2, nome: "Joaquim", pontos: 530 , aprovado: true },
            { id: 3, nome: "Ronaldinho", pontos:200, aprovado: true },
            { id: 4, nome: "KÁKA", pontos: 100, aprovado: false },
            { id: 5, nome: "ANA", pontos: 85, aprovado: false  }
        ]
    }
}); 