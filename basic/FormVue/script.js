const aplicacao = new Vue({
    el: "#main",
    data: {
      txtParaCripto: '',
      txtParaDescripto: '',
      msgErro: '',
      resultadoTitulo: '',
      resultadoTexto: '',
    },
    methods: {
      criptografar: function() {
        if ( this.txtParaCripto.length > 0 ) {
          this.resultadoTitulo = 'Texto criptografado';
          this.resultadoTexto = btoa(this.txtParaCripto)
          this.msgErro = "";
        } else {
          this.resultadoTitulo = '';
          this.resultadoTexto = '';
          this.msgErro = "Digite um texto para criptografar";
        }
      },
      verificaBase64: function(texto) {
        const regex = /^([A-Za-z0-9+/]{4})*([A-Za-z0-9+/]{4}|[A-Za-z0-9+/]{3}=|[A-Za-z0-9+/]{2}==)$/;
        return regex.test(texto);
      },
      descriptografar: function() {
        const verificaBase64 = this.verificaBase64(this.txtParaDescripto);
  
        if ( verificaBase64 && this.txtParaDescripto.length > 0) {
          this.resultadoTitulo = 'Texto descriptografado';
          this.resultadoTexto = atob(this.txtParaDescripto);
          this.msgErro = "";
        } else {
          this.resultadoTitulo = '';
          this.resultadoTexto = '';
          this.msgErro = "Este não é um formato válido";
        }
      },
    }
  });
  



