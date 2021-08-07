class Matrix{

    constructor(rows,cols,elements){

        this.rows = rows
        this.cols = cols

        if(elements == undefined){

            this.elements = new Array(this.rows*this.cols)

            for(var i = 0; i < this.rows*this.cols;i++){

                this.elements[i] = 0;
            }

        } else {

            if(this.rows*this.cols == elements.length){

            this.elements = elements 

            } else {

                throw "A quantidade de elementos nao e compativel com a quantidade de linhas e colunas"
            }
        }        
    }

     get(i,j){

        if((i > this.rows || i <= 0) && (j > this.cols || j <= 0)){

            throw "O numero de colunas e o numero de linhas fornecidos são inválidos"

        } else if (j > this.cols || j <= 0){

            throw "O numero de colunas fornecido é inválido"

        } else if(i > this.rows || i <= 0){

            throw "O numero de linhas fornecido é invalido"

        }  else {

        return this.elements[(j-1) + (i-1) * this.cols]

        }
    }

     set(i,j,value){

        if((i > this.rows || i <= 0) && (j > this.cols || j <= 0)){

            throw "O numero de linhas e o numero de colunas fornecidos são inválidos"
             
        } else if(j > this.cols || j <= 0){

            throw "O numero de colunas fornecido é inválido"

        } else if(i > this.rows || i <= 0){

            throw "O numero de linhas fornecido é inválido"

        }  else {

        this.elements[(j-1) + (i-1) * this.cols] = value

        }
    }
}