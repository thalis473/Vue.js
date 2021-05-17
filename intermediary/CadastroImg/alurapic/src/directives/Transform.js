import Vue from 'vue';

Vue.directive('meu-transform',{

    bind(el,binding, vnode){
        let current = 0;

        el.addEventListener('dblclick', function(){

            let incremento = binding.value || 90;
            let efeito; 
            current+=incremento;
            if(!binding.arg || binding.arg =='rotate' ){
               
                if (binding.modifiers.reverse) {
                    current-=incremento;
                } else {
                    current+=incremento;
                }
                efeito= `rotate(${current}deg)`;
            }else if(binding.arg == "scale"){
                efeito =`scale(${incremento})`
            }
           

            el.style.transform=efeito;
            // se tem um modificador no meu elemento ele realizará a ação
            if(binding.modifiers.animate) el.style.transition ='transform 0.5s'
        })
    }
})

// el->Éa referencia do elemento no Dom na qual a diretiva esta relacionada
// binding->ultiizo ele para pegar dados da diretivas no componente
//vnode-> Ele permite acessar propriedades do Componente no qual ela foi associada,essa dependência pode acabar com o reuso da diretiva, por isso deve ser usado com parcimônia.
//modifiers -> e do javaScript para reconhecer se dentro daquela propiedade existe modificadores,