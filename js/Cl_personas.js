export default class Cl_Personas {
    constructor(nombre, edad,tipo) {
        this.nombre = nombre;
        this.edad = edad;
        this.tipo = tipo
    }
    set nombre(n) {
        this._nomnbre = n;
    }
    get nombre() {
        return this._nomnbre;
    }
    set edad(e) {
        this._edad = e;
    }
    get edad() {
        return this._edad;
    }
    set tipo(t) {
        this._tipo = t;
    }
    get tipo() {
        return this._tipo;
    }
    mayorEdad() {
        return this.edad >= 18 ? "SI" : "NO";
    }
    
    sueldoBase() {
        return 150;
    }
}