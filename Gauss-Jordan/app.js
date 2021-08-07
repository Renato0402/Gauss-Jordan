

var d = new Matrix(3, 4, [1, 1, 2, 9, 2, 4, -3, 1, 3, 6, -5, 0])

var e = new Matrix(3, 4, [3, -7, 4, 10, -1, -2, 3, 1, 1, 1, 2, 8])

var c = new Matrix(2,2,[6,1,5,2])

var la = new Linalg()

//var f = la.gauss_jordan(d)


//Codigo do carregamento do arquivo

var matrix;

document.getElementById('loadDatabase').addEventListener('change', function () {

    var fr = new FileReader();

    fr.onload = function () {

        var lines = this.result.split('\n');
        var isFirst = true
       

        for (var k = 0; k < lines.length; k++) {
            if (!lines[k].startsWith('%') && lines[k] != "") {

                var aux = lines[k].split(' ')

                if (isFirst) {
                    matrix = new Matrix(parseInt(aux[0]), parseInt(aux[1]))
                    isFirst = false

                } else {
                    matrix.set(parseInt(aux[0]), parseInt(aux[1]), parseInt(aux[2]))
                }

            }
        }

        var start = Date.now();

        console.log(la.gauss_jordan(matrix))

        var stop = Date.now()

        var time = stop - start

        console.log(time)
    }
    fr.readAsText(this.files[0])

});





