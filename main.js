import axios from "axios";
import Aluno from "./Aluno";

export let listaAlunos = [];
export let a = {};

export var alunos = document.getElementById('table-alunos');

window.getAlunos = async function getAlunos() {
  await axios.get('http://localhost:3000/alunos')
  .then(res => {
   listaAlunos = res.data
  })

   
  var content = listaAlunos.forEach((e, indice, array) => {
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
    td_horario.innerText = JSON.stringify(listaAlunos[indice].horario_aula).replace(/^"|"$/g, '').replace('00:00','00');
    tr.appendChild(td);
    alunos.appendChild(tr);
    console.log(array);
  });

  //console.log(listaAlunos);
  return listaAlunos;

}






//module.exports = { getAlunos, listaAlunos, axios: require('axios') }