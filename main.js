import axios from "axios";
import Aluno from "./Aluno";
import Usuario from "./Usuario";

export let listaAlunos = [];
export let a = {};
export let aluno = {};
export let usuario = {};

export var alunos = document.getElementById('table-alunos');
export let celulas = document.querySelectorAll('table tr');
export let cadBtn = document.getElementById('cad-btn');

const closeModalButton = document.querySelector("#close-modal");
const modal = document.querySelector("#modal");
const fade = document.querySelector("#fade");

const nome = document.getElementById('nome');
const idade = document.getElementById('idade');
const telefone = document.getElementById('telefone');
const endereco = document.getElementById('endereco');
const email = document.getElementById('email');
const datanasc = document.getElementById('datanasc');
const cursos = document.getElementById('cursos');
const diasemana = document.getElementById('diasemana');
const horarioaula = document.getElementById('horarioaula');

//modal
const enviar_modal_button = document.getElementById('send-modal');
//login

const login_email = document.getElementById('login-box-email');
const login_senha = document.getElementById('login-box-senha');
const login_button = document.getElementById('login-box-btn');




export function rowFactory() {
  celulas.forEach(function (celula, indice) {

    celula.id = "celula-" + indice;

    celula.addEventListener("mouseover", function () {
      this.style.backgroundColor = "yellow";
    });

  });
}



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

  return obj;
}

function setUsuario(user) {
  user.nome = document.getElementById('nome').value;
  user.data_nasc = document.getElementById('datanasc').value;
  user.telefone = document.getElementById('telefone').value;
  user.endereco = document.getElementById('endereco').value;
  user.email = document.getElementById('email').value;
  user.senha = document.getElementById('senha').value;

  return user;
}

function setCurso(obj) {

    let newCursoCad = {
    idaluno: '',
    materia: '',
    diasemana: '',
    horarioaula: ''
  };

  // if (obj !== null) {
  //   newCursoCad.idaluno = obj.id;
  // }
  
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



  console.log('Passou por aqui')
  console.log(newAluno);

  //conf.show();

  await axios.post('http://localhost:3000/alunos/criar', newAluno)
    .finally(() => alert('Cadastro realizado com sucesso!'));
}

window.createUsuarios = async function createUsuarios() {
  let usuario = new Usuario();
  let novoUsuario = setUsuario(usuario);

  console.log('Passou por aqui')
  console.log(novoUsuario);

  //conf.show();

  await axios.post('http://localhost:3000/usuarios/criar', novoUsuario)
    .finally(() => alert('Cadastro realizado com sucesso!'));
}


window.getAlunos = async function getAlunos() {
  await axios.get('http://localhost:3000/alunos')
    .then(res => {
      listaAlunos = res.data;
      return listaAlunos;
    })
  await listaTodos(listaAlunos);
}

window.getAlunoByEmail = async function getAlunoByEmail(email) {
  await axios.get(`http://localhost:3000/alunos/${email}`)
    .then(res => {
      aluno = res.data;
      return res.data;
    });
}

window.updateAlunoByEmail = async function updateAlunoByEmail(obj) {
  let updateAluno = setAlunos(obj);
  let updateCursoAluno = setCurso(obj);
  updateAluno.curso = updateCursoAluno;

  console.log('Passou por aqui')
  console.log(updateAluno);

  //conf.show();

  await axios.post('http://localhost:3000/alunos/criar', updateAluno)
    .finally(() => alert('Cadastro realizado com sucesso!'));
}

window.deleteAlunoByEmail = async function deleteAlunoByEmail(email) {
  await axios.delete(`http://localhost:3000/alunos/${email}`)
    .then(res => {
      email = res.data;
      return email;
    })
    .catch(error => {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      }
    });
}

window.tryLogin = async function tryLogin() {
  let user = await login_email.value;
  let senha = await login_senha.value;

  let obj = {
    email: user,
    senha: senha
  }
    // axios.post(`http://localhost:3000/alunos/`, obj)
    // .then(res => {
    //   res.data;
    // })

  console.log(obj);

  return obj;

}

// login_button.onclick = async () => {
//   await tryLogin();
// }

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
    let td_editar = tr.insertCell();
    let td_excluir = tr.insertCell();

    //Cria botões de ações
    //let button_editar = document.createElement('img');
    //let button_excluir = document.createElement('img');

    let button_editar = document.createElement('button');
    let button_excluir = document.createElement('button');

    let icon_editar = document.createElement('img');
    let icon_excluir = document.createElement('img');

    icon_editar.src = "./icons/pencil-square.svg";
    icon_excluir.src = "./icons/x-square-fill.svg";

    td_nome.innerText = JSON.stringify(listaAlunos[indice].nome).replace(/^"|"$/g, '');
    td_idade.innerText = JSON.stringify(listaAlunos[indice].idade).replace(/^"|"$/g, '');
    td_telefone.innerText = JSON.stringify(listaAlunos[indice].telefone).replace(/^"|"$/g, '');
    td_endereco.innerText = JSON.stringify(listaAlunos[indice].endereco).replace(/^"|"$/g, '');
    td_email.innerText = JSON.stringify(listaAlunos[indice].email).replace(/^"|"$/g, '');
    td_curso.innerText = JSON.stringify(listaAlunos[indice].materia).replace(/^"|"$/g, '');
    td_dia_semana.innerText = JSON.stringify(listaAlunos[indice].dia_semana).replace(/^"|"$/g, '');
    td_horario.innerText = JSON.stringify(listaAlunos[indice].horario_aula).replace(/^"|"$/g, '').replace('00:00', '00');


    button_editar.appendChild(icon_editar);
    button_excluir.appendChild(icon_excluir);

    td_editar.appendChild(button_editar);
    td_excluir.appendChild(button_excluir);


    var email = listaAlunos[indice].email;
    //console.log(email);
    let string = 'janedoe@mail.com';

    button_editar.onclick = async () => {
      await window.getAlunoByEmail(email);
      console.log(aluno[0]);


      window.toggleModal();
      await window.updateModal(aluno[0]);

      enviar_modal_button.onclick = () => {
      window.updateAlunoByEmail(aluno[0]);
     //window.toggleModal();
      //location.reload();
      console.log('clicou')
        
    }
  }

    button_excluir.onclick = () => {
      let confirm = window.confirm('Deseja realmente excluir esse cadastro?');

      if (confirm) {
        window.deleteAlunoByEmail(email);
          setTimeout(function() {
            location.reload();
          }, 500);
      } else {
        return;
      }
    };

    tr.appendChild(td);
    alunos.appendChild(tr);

    //console.log(alunos)


    //Configura estilo da célula ao estar com o mouse sobre ela
    alunos.childNodes.forEach(function (row, indice) {
      row.id = "lina-" + indice;

      tr.addEventListener("mouseover", function () {
        this.style.backgroundColor = "white";
      });

      tr.addEventListener("mouseout", function () {
        this.style.backgroundColor = "";
      });
    });
  });



}

window.toggleModal = function toggleModal() {
  [modal, fade].forEach((el) => {
    el.classList.toggle("hide");
  })
}

window.onOffModal = async function onOffModal() {
  [closeModalButton, fade].forEach((el) => {
    el.addEventListener("click", () => window.toggleModal());
  });
}

onOffModal();

window.updateModal = async function updateModal(data) {
  const date = new Date(await data.data_nasc);
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');


  const dataFormatada = `${ano}-${mes}-${dia}`;
  console.log(dataFormatada);

  let materiaValue = '';

  switch (data.materia) {
    case 'Violão - Nível Básico':
      materiaValue = 'violao'
      break;
    case 'guitarra':
      materiaValue = 2
      break;
    case 'contrabaixo':
      materiaValue = 3
      break;

    case 'teclado':
      materiaValue = 4
      break;

    case 'canto':
      materiaValue = 5
      break;
    default:
      materiaValue = null;
  }


  nome.value = await data.nome;
  idade.value = await data.idade;
  telefone.value = await data.telefone;
  endereco.value = await data.endereco;
  email.value = await data.email;
  datanasc.value = dataFormatada;
  cursos.value = materiaValue;
  diasemana.value = await data.dia_semana;
  horarioaula.value = data.horario_aula;
}




//module.exports = { getAlunos, listaAlunos, axios: require('axios') }