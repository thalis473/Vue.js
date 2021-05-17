<template>
   
        <button @click="disparaAcao()" class="botao" :class="estiloDoBotao" :type="tipo">{{rotulo}}</button>
    
</template>
<script>


export default ({
    
    props:{
        //validações das props
        tipo:{
            required:true,
            type:String
        },
        rotulo:{
            required:true,
            type: String
        },
        
        confirmacao:Boolean,

        estilo:String
    },
    methods:{
        disparaAcao(){

            if(this.confirmacao){
                
                if(confirm('confirma operação?')){
                    this.$emit('botaoAtivado', new Date());
                }
                return;
            }
            this.$emit('botaoAtivado');
        }
    },
    computed:{
        estiloDoBotao(){
            if(this.estilo =='padrao' || !this.estilo ) return 'botao-padrao';
            if(this.estilo == 'perigo') return 'botao-perigo';
        }
    }

})
</script>
<style  >

@import './Botao.css';

</style>
