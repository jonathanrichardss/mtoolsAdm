import axios from "axios";
import Aluno from "./Aluno";

export let listaAlunos = [];
export let a = {};

export var alunos = document.getElementById('table-alunos');

function setAlunos(obj) {
  obj.nome = document.getElementById('nome').value;
  obj.data_nasc = document.getElementById('datanasc').value;
  obj.telefone = document.getElementById('telefone').value;
  obj.endereco = document.getElementById('endereco').value;
  obj.email = document.getElementById('email').value;

  let cursos = obj.id_materia = document.getElementById('cursos').value;
  let opcoes;
  switch (cursos) {
    case 'violao':
      opcoes = 1
      break;
    case 'guitarra':
      opcoes = 2
      break;
    case 'contrabaixo':
      opcoes = 3
      break;

    case 'teclado':
      opcoes = 4
      break;

    case 'canto':
      opcoes = 5
      break;  
    default:
        opcoes = null;
  }

  obj.id_materia = opcoes;

  console.log(opcoes);

  return obj;
}

function setCurso() {

  let newCursoCad = {
    idaluno: '',
    materia: '',
    diasemana: '',
    horarioaula: ''
  };

  let materia = newCursoCad.materia = document.getElementById('cursos').value;
  newCursoCad.diasemana = document.getElementById('diasemana').value;

  switch (materia) {
    case 'violao':
      materia = 1
      break;
    case 'guitarra':
      materia = 2
      break;
    case 'contrabaixo':
      materia = 3
      break;

    case 'teclado':
      materia = 4
      break;

    case 'canto':
      materia = 5
      break;
  }

  newCursoCad.horarioaula = document.getElementById('horarioaula').value;


  return newCursoCad;
}

window.createAlunos = async function createAlunos() {
  let aluno = new Aluno();
  let newAluno = setAlunos(aluno);
  let newCursoAluno = setCurso();
  newAluno.curso = newCursoAluno;



  console.log(newAluno);
  await axios.post('http://localhost:3000/alunos/criar', newAluno);
}

window.getAlunos = async function getAlunos() {
  await axios.get('http://localhost:3000/alunos')
    .then(res => {
      listaAlunos = res.data;
      console.log(res.data)
      return listaAlunos;
    })
  console.log(listaAlunos)
  await listaTodos(listaAlunos);
}

window.listaTodos = async function listaTodos(lista) {

  lista.forEach((e, indice, array) => {
    var tr = document.createElement('tr');
    let td = document.createElement('td');
    let td_nome = tr.insertCell();
    let td_idade = tr.insertCell();
    let td_telefone = tr.insertCell();
    let td_endereco = tr.insertCell();
    let td_email = tr.insertCell();
    let td_curso = tr.insertCell();
    let td_dia_semana = tr.insertCell();
    let td_horario = tr.insertCell();

    td_nome.innerText = JSON.stringify(listaAlunos[indice].nome).replace(/^"|"$/g, '');
    td_idade.innerText = JSON.stringify(listaAlunos[indice].idade).replace(/^"|"$/g, '');
    td_telefone.innerText = JSON.stringify(listaAlunos[indice].telefone).replace(/^"|"$/g, '');
    td_endereco.innerText = JSON.stringify(listaAlunos[indice].endereco).replace(/^"|"$/g, '');
    td_email.innerText = JSON.stringify(listaAlunos[indice].email).replace(/^"|"$/g, '');
    td_curso.innerText = JSON.stringify(listaAlunos[indice].materia).replace(/^"|"$/g, '');
    td_dia_semana.innerText = JSON.stringify(listaAlunos[indice].dia_semana).replace(/^"|"$/g, '');
    td_horario.innerText = JSON.stringify(listaAlunos[indice].horario_aula).replace(/^"|"$/g, '').replace('00:00', '00');
    tr.appendChild(td);
    alunos.appendChild(tr);
    console.log(array);
  });
}







//module.exports = { getAlunos, listaAlunos, axios: require('axios') }