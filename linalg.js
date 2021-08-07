class Linalg {

    add(a, b) {

        if (typeof (a) == "number") {

            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo matrix";

            var res = new Matrix(b.rows, b.cols);

            for (var i = 1; i <= b.rows; i++) {
                for (var j = 1; j <= b.cols; j++) {
                    res.set(i, j, a + b.get(i, j))
                }
            }

            return res

        } else if (typeof (a) == "object") {

            if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


            var res = new Matrix(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {
                for (var j = 1; j <= a.cols; j++) {
                    res.set(i, j, a.get(i, j) + b.get(i, j))
                }
            }

            return res
        }

    }

    sub(a, b) {


        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


        var res = new Matrix(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                res.set(i, j, a.get(i, j) - b.get(i, j))
            }
        }

        return res
    }

    mul(a, b) {

        if (typeof (a) == "number") {

            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto"

            var res = new Matrix(b.rols, b.cols)

            for (var i = 1; i <= b.rows; i++) {
                for (var j = 1; j <= b.cols; j++) {
                    res.set(i, j, a * b.get(i, j))
                }
            }

            return res

        } else if (typeof (a) == "object") {

            if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
            if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

            if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."


            var res = new Matrix(a.rows, a.cols)

            for (var i = 1; i <= a.rows; i++) {
                for (var j = 1; j <= a.cols; j++) {
                    res.set(i, j, a.get(i, j) * b.get(i, j))
                }
            }

            return res
        }

    }

    div(a, b) {


        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.rows == b.rows && a.cols == b.cols)) throw "As matrizes não possuem as mesmas dimensões."




        var res = new Matrix(a.rows, a.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {

                if (b.get(i, j) == 0) throw "A matriz possui um ou mais elementos iguais a 0"; else res.set(i, j, a.get(i, j) / b.get(i, j))

            }
        }

        return res
    }

    transposta(a) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        var res = new Matrix(a.cols, a.rows)

        for (var i = 1; i <= a.cols; i++) {
            for (var j = 1; j <= a.rows; j++) {


                res.set(i, j, a.get(j, i))
            }
        }

        return res
    }

    mulMatrix(a, b) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix."
        if (!(b instanceof Matrix)) throw "O parametro b deve ser um objeto do tipo Matrix."

        if (!(a.cols == b.rows)) throw "O numero de colunas da matriz a não é igual ao numero de linhas da matrix b."

        var res = new Matrix(a.rows, b.cols)

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= b.cols; j++) {
                for (var k = 1; k <= b.rows; k++) {

                    res.set(i, j, (a.get(i, k) * b.get(k, j) + res.get(i, j)))
                }
            }
        }
        return res

    }


    mulSoma(a, linha, k, coluna) {

        for (var j = 1; j <= a.cols; j++) {


            a.set(linha, j, (k * a.get(coluna, j)) + a.get(linha, j))

        }


    }

    mulLine_constant(a, l, k) {

        for (var j = 1; j <= a.cols; j++) {

            a.set(l, j, a.get(l, j) * k)
        }

    }


    swapLines(a, l1, l2) {

        for (var j = 1; j <= a.cols; j++) {

            var aux = a.get(l1, j)

            a.set(l1, j, a.get(l2, j))
            a.set(l2, j, aux)
        }

    }



    gauss_jordan(a) {

        if (!(a instanceof Matrix)) throw "O parametro a deve ser um objeto do tipo Matrix"

        //Meu metodo gauss jordan


        for (var j = 1; j <= a.cols - 1; j++) {

            var index = j

            for (var i = j + 1; i <= a.rows; i++) {

                if (a.get(index, j) < a.get(i, j)) {

                    index = i
                }

            }
            if (index != j) {

                this.swapLines(a, j, index)

            }


            for (var i = j + 1; i <= a.rows; i++) {
                if (a.get(j, j) != 0) {
                    this.mulSoma(a, i, -a.get(i, j) / a.get(j, j), j)
                } else {
                    this.swapLines(a, j, j + 1)
                }
            }
        }

        for (var j = a.cols - 1; j > 1; j--) {
            for (var i = j - 1; i > 0; i--) {
                if (a.get(j, j) != 0) {
                    this.mulSoma(a, i, -a.get(i, j) / a.get(j, j), j)
                } else {
                    this.swapLines(a, j, j + 1)
                }
            }
        }

        for (var i = 1; i <= a.rows; i++) {

            this.mulLine_constant(a, i, 1 / a.get(i, i))
        }

        //Arredondar os numeros

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                a.set(i, j, Math.round(a.get(i, j)))
            }
        }

        //Alguns numeros davam -0 entao mudei pra 0 so pra ficar mais legivel

        for (var i = 1; i <= a.rows; i++) {
            for (var j = 1; j <= a.cols; j++) {
                if (a.get(i, j) == -0) {
                    a.set(i, j, 0)
                }
            }
        }

        //Fim

         //BRUNO - Metodo feito em sala

       /* for (var j = 1; j <= a.cols - 1; j++) {
  
              //Colocar o maior elemento da coluna como pivo
  
              var max = a.get(j,j);
              var index = j
  
              for (var i = j +1; i <= a.rows; i++) {
  
                  if (a.get(i, j) != 0 && a.get(i, j) > max) {
  
                      max = a.get(i, j)
                      index = i
                  }
       
              }
                 if(index!=j){
  
                  this.change_two_lines(a, j, index)

                 }
        
  
              //Zerar elementos do pivo na coluna j
  
              for (var i = j + 1; i <=  a.rows; i++) {
  
                if(a.get(i,j) !=0){
           
                      this.mulLineByConstantAddByOtherLine(a, j, (a.get(i, j) * -1) / a.get(j, j), i)
                }

              }
         
  
          }*/

        return a

    
    }

     //FUNÇÕES DO BRUNO

     change_two_lines(m, l1, l2) {

        var aux = 0

        for (var j = 1; j <= m.cols; j++) {

            aux = m.get(l1, j)
            m.set(l1, j, m.get(l2, j))
            m.set(l2, j, aux)
        }

    }

    mul_line_by_constant(m, l, k) {

        for (var j = 1; j <= m.cols; j++) {

            m.set(l, j, m.get(l, j) * k)
        }


    }

    mulLineByConstantAddByOtherLine(m, l1, k, l2) {


        for (var j = 1; j <= m.cols; j++) {

            m.set(l2, j, m.get(l1, j) * k + m.get(l2, j))
        }



    }

}