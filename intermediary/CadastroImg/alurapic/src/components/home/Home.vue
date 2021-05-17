<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <p v-show="mensagem" class="centralizado">{{mensagem}}</p>

    <input type="search" class="filtro" @input="filtro = $event.target.value" placeholder="filtre por parte do título">

    <ul class="lista-fotos">

        <li class="lista-fotos-item" v-for="foto in fotosComFiltro" :key="foto.url">

          <meu-painel :titulo="foto.titulo">
            
              <imagem-responsiva v-meu-transform:scale.animate="1.2" :url="foto.url" :titulo="foto.titulo"/>
               <router-link :to="{name : 'altera', params:{ id: foto._id} }">
                  <meu-botao tipo="button" rotulo="ALTERAR" />
               </router-link>

              <meu-botao  tipo="button" rotulo="REMOVER" 
              @botaoAtivado="remove($event,foto)" 
              :confirmacao="true" 
              estilo="perigo"/>

          </meu-painel>

        </li>
    </ul>
  </div>
</template>

<script>
import Painel from '../shared/painel/Painel.vue';
import ImagemResponsiva from '../shared/imagem-responsiva/ImagemResponsiva.vue';
import Botao from '../shared/botao/Botao.vue'
import FotoService from '../../domain/foto/FotoService'

export default {

  components: {
    'meu-painel' : Painel, 
    'imagem-responsiva': ImagemResponsiva,
    'meu-botao': Botao
  },

  data() {

    return {

      titulo: 'Alurapic', 
      fotos: [], 
      filtro: '',
      mensagem:''
    }
  },

  computed: {

    fotosComFiltro() {

      if(this.filtro) {
        let exp = new RegExp(this.filtro.trim(), 'i');
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },
methods:{
  //remoção da foto

  remove($event,foto){
// console.log($event) // Esse $event foi só por motivo de  estudo

//        ULTILIZANDO DA CLASS (refatoração 3)

      this.service.apaga(foto._id)
        .then(()=>{
            let indice = this.fotos.indexOf(foto);// peguei o indice da foto em questão
            this.fotos.splice(indice, 1); //Aqui eu removo do meu array a foto em questão tirando ela da vizualização do usuario
            this.mensagem = 'Foto removida com sucesso'
           },err=>this.mensagem = err.message
           )



//         ULTILIZANDO DO RESOURCE (refatoração2)
    /*  this.resource.delete({id:foto._id})
      .then(()=>{
            let indice = this.fotos.indexOf(foto);// peguei o indice da foto em questão
            this.fotos.splice(indice, 1); //Aqui eu removo do meu array a foto em questão tirando ela da vizualização do usuario
            this.mensagem = 'Foto removida com sucesso'
           },err=>{
           console.log(err)
           this.mensagem = 'Não foi possivel remover a foto'
         })  */

//      ULTILIZANDO O METODO $HTTP (baixo nivel) digitando mais codigo  (refatoração 1)   //
/*
      this.$http
         .delete(`v1/fotos/${foto._id}`)
         .then(()=>{
            let indice = this.fotos.indexOf(foto);// peguei o indice da foto em questão
            this.fotos.splice(indice, 1); //Aqui eu removo do meu array a foto em questão tirando ela da vizualização do usuario
            this.mensagem = 'Foto removida com sucesso'
           },err=>{
           console.log(err)
           this.mensagem = 'Não foi possivel remover a foto'
         })
  */
    
  }
},
  created() {
//        ULTILIZANDO DA CLASS (refatoração 3)
      this.service = new FotoService(this.$resource);

      this.service.lista()
        .then(fotos => this.fotos =fotos, err=> this.mensagem = err.message); // Essa msg vem do Fotoservice



//         ULTILIZANDO DO RESOURCE (refatoração2)
 /*   this.resource = this.$resource('v1/fotos{/id}');

    this.resource
     .query()
     .then(res => res.json())
     .then(fotos => this.fotos = fotos, err => console.log(err));  */


//      ULTILIZANDO O METODO $HTTP (baixo nivel) digitando mais codigo  (refatoração 1)

   /* this.$http.get('v1/fotos') 
      .then(res => res.json())
      .then(fotos => this.fotos = fotos, err => console.log(err)); */
  }
}

</script>

<style>

  .centralizado {

    text-align: center;
  }

  .lista-fotos {
    list-style: none;
  }

  .lista-fotos .lista-fotos-item {

    display: inline-block;
  }

  .filtro {

    display: block;
    width: 100%;
  }
</style>
