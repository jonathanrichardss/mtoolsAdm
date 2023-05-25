import axios from "axios";
import Aluno from "./Aluno";
import Usuario from "./Usuario";

export let listaAlunos = [];
export let a = {};
export let aluno = {};
export let usuario = {};
export let authUser = {};

//Carregar tabela e preenchimento das celulas da mesma
export var alunos = document.getElementById('table-alunos');
export let celulas = document.querySelectorAll('table tr');
export const cadBtn = document.getElementById('cad-btn');
export const cadBtnUsuario = document.getElementById('cad-btn-usuario');

//Botões da home
export let home_buttons = document.querySelectorAll('ul li');

//Modal section
export const closeModalButton = document.querySelector("#close-modal");
export const modal = document.querySelector("#modal");
export const fade = document.querySelector("#fade");

//Campos para envio/validação de formulários
export const nome = document.getElementById('nome');
export const idade = document.getElementById('idade');
export const telefone = document.getElementById('telefone');
export const endereco = document.getElementById('endereco');
export const email = document.getElementById('email');
export const datanasc = document.getElementById('datanasc');
export const cursos = document.getElementById('cursos');
export const diasemana = document.getElementById('diasemana');
export const horarioaula = document.getElementById('horarioaula');

//modal
export const enviar_modal_button = document.getElementById('send-modal');

//login
export const login_email = document.getElementById('login-box-email');
export const login_senha = document.getElementById('login-box-senha');
export const login_button = document.getElementById('login-box-btn');


//home
export const button_home_on_go_to_home = document.getElementById('go-home');
export const button_home_on_go_to_alunos = document.getElementById('go-alunos');
export const button_home_on_go_to_cad_alunos = document.getElementById('go-cad-alunos');
export const button_home_on_go_to_cad_usuarios = document.getElementById('go-cad-usuarios');
export const button_home_on_go_to_sair = document.getElementById('go-sair');


export const cadastro_href = "cadastro.html";
export const index_href = "index.html";


export const cadastro_container = document.getElementById('cadastro-container');


export function rowFactory() {
  celulas.forEach(function (celula, indice) {

    celula.id = "celula-" + indice;

    celula.addEventListener("mouseover", function () {
      this.style.backgroundColor = "yellow";
    });

  });
}



export function setAlunos(obj) {
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
    case 'bateria':
      opcoes = 6
      break;
    default:
      opcoes = null;
  }

  obj.id_materia = opcoes;

  return obj;
}

export function setUsuario(user) {
  user.nome = document.getElementById('nome').value;
  user.data_nasc = document.getElementById('datanasc').value;
  user.telefone = document.getElementById('telefone').value;
  user.endereco = document.getElementById('endereco').value;
  user.email = document.getElementById('email').value;
  user.senha = document.getElementById('senha').value;

  return user;
}

export function setCurso(obj) {

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
    case 'bateria':
      materia = 6
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

  if (newAluno.nome === '') {
    alert('Preencha o campo nome.');
    return;
  }

  if (newAluno.idade === '') {
    alert('Preencha o campo idade.');
    return;
  }

  if (newAluno.endereco === '') {
    alert('Preencha o campo endereço.');
    return;
  }

  if (newAluno.email === '') {
    alert('Preencha o campo email.');
    return;
  }

  if (newAluno.data_nasc === '') {
    alert('Preencha o campo data de nascimento.');
    return;
  }
  console.log('Passou por aqui')
  console.log(newAluno);

  await axios.post('https://mtoolsadmbackend-production.up.railway.app/alunos/criar', newAluno)
    .then(alert('Cadastro realizado com sucesso!'))
    .finally(location.href = "alunos.html"
    );
}

if (cadBtn !== null) {
  cadBtn.onclick = async () => {
    window.createAlunos();
  }
}



window.createUsuarios = async function createUsuarios() {
  let usuario = new Usuario();
  let novoUsuario = setUsuario(usuario);

  if (usuario.nome === '') {
    alert('Preencha o campo nome.');
    return;
  }

  if (usuario.idade === '') {
    alert('Preencha o campo idade.');
    return;
  }

  if (usuario.endereco === '') {
    alert('Preencha o campo endereço.');
    return;
  }

  if (usuario.email === '') {
    alert('Preencha o campo email.');
    return;
  }

  if (usuario.data_nasc === '') {
    alert('Preencha o campo data de nascimento.');
    return;
  }

  console.log('Passou por aqui')
  console.log(novoUsuario);

  //conf.show();

  axios.post('https://mtoolsadmbackend-production.up.railway.app/usuarios/criar', novoUsuario)
    .then(alert('Cadastro realizado com sucesso!'))
    .finally(window.location.href = "login.html");
}

if (cadBtnUsuario !== null) {
  cadBtnUsuario.onclick = async () => {
    window.createUsuarios();
  }
}


window.getAlunos = async function getAlunos() {
  await axios.get('https://mtoolsadmbackend-production.up.railway.app/alunos')
    .then(res => {
      listaAlunos = res.data;
      return listaAlunos;
    })
  await listaTodos(listaAlunos);
}

window.getAlunoByEmail = async function getAlunoByEmail(email) {
  await axios.get(`https://mtoolsadmbackend-production.up.railway.app/alunos/${email}`)
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

  await axios.post('https://mtoolsadmbackend-production.up.railway.app/alunos/criar', updateAluno)
    .finally(() => alert('Cadastro realizado com sucesso!'));
}

window.deleteAlunoByEmail = async function deleteAlunoByEmail(email) {
  await axios.delete(`https://mtoolsadmbackend-production.up.railway.app/alunos/${email}`)
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
  let user = login_email.value;
  let senha = login_senha.value;


  let obj = {
    email: user,
    senha: senha,
  }

  await axios.post(`https://mtoolsadmbackend-production.up.railway.app/alunos/login`, obj)
    .then(async function (res) {
      authUser = await res.data;
      console.log(await res.data);
      console.log('authUser');
      return res.data;
    })
    .catch((error) => {
      console.error(error);
    });

  console.log('Frase aqui.')
}

if (login_button !== null) {
  login_button.onclick = async (e) => {
    e.preventDefault();
    await window.tryLogin()

    let tokenVal = Math.random().toString(16).substring(2) + Math.random().toString(16).substring(2);

    if (Object.keys(authUser).length === 0) {
      console.log('fora do IF')
      console.log('time is brief')
      console.log(authUser);
    } else {
      localStorage.setItem('token', tokenVal);
      location.href = "home.html"
    }
  }
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
        window.toggleModal();
        location.reload();
        console.log('clicou');
        return;
      }
    }

    button_excluir.onclick = () => {
      let confirm = window.confirm('Deseja realmente excluir esse cadastro?');

      if (confirm) {
        window.deleteAlunoByEmail(email);
        setTimeout(function () {
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

  let total_alunos = document.getElementById('total-alunos');

  total_alunos.textContent = `Total alunos: ${listaAlunos.length}`;


}

window.toggleModal = function toggleModal() {
  [modal, fade].forEach((el) => {
    el.classList.toggle("hide");
  })
}

window.onOffModal = async function onOffModal() {
  [closeModalButton, fade].forEach((el) => {
    if (el !== null) {
      el.addEventListener("click", () => window.toggleModal());
    }
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
    case 'Violão':
      materiaValue = 'violao'
      break;
    case 'Guitarra':
      materiaValue = 'guitarra'
      break;
    case 'Contrabaixo':
      materiaValue = 'contrabaixo'
      break;
    case 'Teclado':
      materiaValue = 'teclado'
      break;
    case 'Canto':
      materiaValue = 'canto'
      break;
    case 'Bateria':
      materiaValue = 'bateria'
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

window.validaUserIsLogado = function validaUserIsLogado() {
  if (localStorage.getItem('token') === '' || localStorage.getItem('token') === null) {
    return false;
  } else {
    return true;
  }
}

window.goToPageAuth = async function goToPageAuth(page) {

  if (page !== '' || page !== null || page !== undefined) {
    location.href = page;
  } else {
    location.href = "login.html";
  }
}


if (button_home_on_go_to_sair !== null) {
  button_home_on_go_to_sair.onclick = () => localStorage.clear();
}

if (button_home_on_go_to_alunos != null) {

  button_home_on_go_to_alunos.addEventListener("click", () => {
    let isLogado = window.validaUserIsLogado();

    if (!isLogado) {
      button_home_on_go_to_alunos.setAttribute('href', "login.html");
      return;
    }

    button_home_on_go_to_alunos.setAttribute('href', "alunos.html");
  });

}

if (button_home_on_go_to_home != null) {

  button_home_on_go_to_home.addEventListener("click", () => {
    let isLogado = window.validaUserIsLogado();

    if (!isLogado) {
      button_home_on_go_to_alunos.setAttribute('href', "login.html");
      return;
    }

    button_home_on_go_to_home.setAttribute('href', "home.html");
  });

}

if (button_home_on_go_to_cad_alunos != null) {

  button_home_on_go_to_cad_alunos.addEventListener("click", () => {
    let isLogado = window.validaUserIsLogado();

    if (!isLogado) {
      button_home_on_go_to_cad_alunos.setAttribute('href', "login.html");
      return;
    }

    button_home_on_go_to_cad_alunos.setAttribute('href', "index.html");
  });

}

if (button_home_on_go_to_alunos != null) {

  button_home_on_go_to_alunos.addEventListener("click", () => {
    let isLogado = window.validaUserIsLogado();

    if (!isLogado) {
      button_home_on_go_to_alunos.setAttribute('href', "login.html");
      return;
    }

    button_home_on_go_to_alunos.setAttribute('href', "alunos.html");
  });

}


function limpaCampos() {

  [nome,
    idade,
    telefone,
    endereco,
    email,
    datanasc,
    cursos,
    diasemana,
    horarioaula].forEach((el) => {
      if (el.value !== null || el.value !== '') {
        nome.value = '';
        idade.value = '';
        telefone.value = '';
        endereco.value = '';
        email.value = '';
        datanasc.value = '';
      }
    })
}


window.addEventListener('pagehide', function () {
  if (location.href == cadastro_href || this.location.href == index_href) {
    limpaCampos();
  }
});

window.addEventListener('pageshow', function () {
  if (location.href == cadastro_href || this.location.href == index_href) {
    limpaCampos();
  }
});


console.log(history.state);
//NÃO COMENTAR OU MUDAR ESSA ESTRUTURA ABAIXO
let isDone = false;

// Função para verificar alterações em location.href
window.checkHrefChange = function checkHrefChange() {

  // Verifica se houve alteração em location.href
  // Lógica a ser executada quando houver uma alteração em location.href
  let isLogado = window.validaUserIsLogado();

  if (!isLogado && location.href !== 'cadastro.html') {
    location.href = "login.html";
    isDone = true;
  }
  if (isDone) {
    checkHrefChange();
    //alert(isDone);
    return;
  }
}
//NÃO COMENTAR OU MUDAR ESSA ESTRUTURA ACIMA
checkHrefChange();


