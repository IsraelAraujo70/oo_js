function Reino(reino){
    this.reino = reino
}

function Filo(reino, filo){
    Reino.call(this, reino)
    this.filo = filo
}

function Classe(reino, filo, classe){
    Filo.call(this, reino, filo)
    this.classe = classe
}

function Ordem(reino, filo, classe, ordem){
    Classe.call(this, reino, filo, classe)
    this.ordem = ordem
}

function Familia(reino, filo, classe, ordem, familia){
    Ordem.call(this, reino, filo, classe, ordem)
    this.familia = familia
}

function Genero(reino, filo, classe, ordem, familia, genero){
    Familia.call(this, reino, filo, classe, ordem, familia)
    this.genero = genero
}

function Especie(reino, filo, classe, ordem, familia, genero, especie){
    Genero.call(this, reino, filo, classe, ordem, familia, genero)
    this.especie = especie
}

function Especime(reino, filo, classe, ordem, familia, genero, especie, nome){
    Especie.call(this, reino, filo, classe, ordem, familia, genero, especie)
    this.nome = nome
}

const apolo = new Especime("Animalia","Chordata", "Mammalia","Carnivora","Canidae","Canis","Canis Lupus","Apolo");

const ursopardo = new Especie(
    "Animalia",      
    "Chordata",      
    "Mammalia",     
    "Carnivora",
    "Ursidae",
    "Ursus",
    "Ursus arctos"
)

const ursus = new Genero("Animalia",      
    "Chordata",      
    "Mammalia",     
    "Carnivora",
    "Ursidae",
    "Ursus",)

console.log(apolo)
console.log(ursopardo)
console.log(ursus)