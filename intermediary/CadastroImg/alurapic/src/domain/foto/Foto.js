export default class Foto {

    constructor(titulo='',url='',descricao=''){

        this.titulo= titulo;
        this.url= url;
        this.descricao= descricao;
    }
}


/* 
Quando for usar essa classe, ficara mais pratico

let foto =new Foto('AAA','http://...','xxxx');

foto.titulo
foto.url
foto.descricao

*/