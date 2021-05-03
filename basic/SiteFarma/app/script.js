const aplication =new Vue({
    el:'#app',
    
    data:{
        nomeEmpresa:"Thfarm",
        colecaoVacinas:[
            {id:1, nome:'Dengue', descricao: "Previne a infecção causada pelos quatro sorotipos de dengue e tem por objetivo reduzir os casos graves da doença"},
            {id:2, nome:'Influenza', descricao: "Essa vacina é uma das mais vendidas em farmácias. Trata-se de vacina inativada."},
            {id:3, nome:'Meningococica B', descricao: "A vacina previne meningites e infecções generalizadas (doenças meningocócicas) causadas pela bactéria meningococo do tipo B."}
        ],
        colecaoDepoimentos: [
            {id: 1 , cliente : "Joadark" , opiniao: "Excelente Farmácia. A melhor que conheci"},
            { id: 2, cliente: "Roberito", opiniao: "Todo ano eu venho tomar a vacina de gripe." },
            { id: 3, cliente: "Andrade", opiniao: "Profissionais excelentes." },
        ]
    }
})