class Curso {

    idaluno; 
    materia; 
    diasemana; 
    horarioaula; 

constructor(idaluno,
    materia,
    diasemana, 
    horarioaula ) {
    
    this.idaluno = idaluno;
    this.materia = materia
    this.diasemana = diasemana;
    this.horarioaula = horarioaula
}

criarCurso() { 

return({
    idaluno: this.idaluno, 
    materia: this.materia,
    diasemana: this.diasemana,
    horarioaula: this.horarioaula
})

}

montarObjPessoa() {
    const obj = this.criarPessoa();
    return JSON.stringify(obj)
}




}


export default Curso;