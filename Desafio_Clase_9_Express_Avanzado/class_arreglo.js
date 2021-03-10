class Arreglo {

    constructor(arr){

        this.arr = arr;

    }

    save = (obj,id) => {
        
        obj.id = id;

        this.arr.push(obj);

        return obj;

    }

    getById = (id) => {
        
        let prods = this.arr;

        let foundObj = prods.find((e) => e.id === id );

        if (foundObj){
            return foundObj
        }
        else{
            return `error: "producto no encontrado"`;
        }
    }

    getAll = () => {
        
        if (!this.arr.length > 0){
            return 'no hay productos cargados';
        }
        else {
            return this.arr;
        }
    }

}

exports.Arreglo = Arreglo;