class Vector extends Matrix{

    //length = numero de linhas do vetor

    constructor(length,elements){

        super(length,1,elements)
    }

    get(i){

        return super.get(i,1)

    }

    set(i,value){

        super.set(i,1,value)
    }
}