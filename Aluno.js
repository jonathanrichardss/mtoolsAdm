class Aluno {

    constructor(id,
        nome,
        sexo,
        data_nasc,
        email,
        telefone,
        id_ativo,
        data_matricula,
        id_materia) {

        this.id = id;
        this.nome = nome;
        this.sexo = sexo;
        this.data_nasc = data_nasc;
        this.email = email;
        this.idade = idade;
        this.telefone = telefone;
        this.id_ativo = id_ativo;
        this.data_matricula = data_matricula;
        this.id_materia = id_materia;
    }

    criarPessoa() { 
    
        return({
            idAluno:  this.id,
            nomeAluno: this.nome,
            sexoAluno:  this.sexo,
            dataNascAluno:  this.data_nasc,
            emailAluno: this.email,
            idadeAluno:  this.idade,
            telefoneAluno:  this.telefone,
            idAtivoAluno:  this.id_ativo,
            dataMatriculaAluno: this.data_matricula,
            idMateriaAluno:  this.id_materia
        })
    
        }

        montarObjPessoa() {
            const obj = this.criarPessoa();
            return JSON.stringify(obj)
        }

}


export default Aluno;
