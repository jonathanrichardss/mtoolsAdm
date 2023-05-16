class Usuario {

    id;
    nome;
    sexo;
    data_nasc;
    email;
    senha;
    telefone;
    id_ativo;
    data_matricula;
    id_materia;
    curso;


constructor(id,
    nome,
    sexo,
    data_nasc,
    email,
    senha,
    telefone,
    id_ativo,
    data_matricula,
    id_materia,
    curso) {

    this.id = id;
    this.nome = nome;
    this.sexo = sexo;
    this.data_nasc = data_nasc;
    this.email = email;
    this.senha = senha;
    this.idade = idade;
    this.telefone = telefone;
    this.id_ativo = id_ativo;
    this.data_matricula = data_matricula;
    this.id_materia = id_materia;
    this.curso = curso;
}

criarPessoa() { 

    return({
        idUsuario:  this.id,
        nomeUsuario: this.nome,
        sexoUsuario:  this.sexo,
        dataNascUsuario:  this.data_nasc,
        emailUsuario: this.email,
        senhaUsuario: this.senha,
        idadeUsuario:  this.idade,
        telefoneUsuario:  this.telefone,
        idAtivoUsuario:  this.id_ativo,
        dataMatriculaUsuario: this.data_matricula,
        idMateriaUsuario:  this.id_materia,
        curso: this.curso
    })

    }

    montarObjPessoa() {
        const obj = this.criarPessoa();
        return JSON.stringify(obj)
    }




}


export default Usuario;
