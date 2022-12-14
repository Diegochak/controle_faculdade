const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sSalario = document.querySelector('#m-salario')
const sCurso = document.querySelector('#m-curso');
// const sMateria = document.querySelector('#m-materia')
const SNota = document.querySelector('#m-nota')

const btnSalvar = document.querySelector('#btnSalvar')
const modelList = document.getElementById("m-curso")

let itens
let id

//DADOS DUMMY (MOCK)
let cursos = ["Fisica", "Direito", "Astronomia"];
let materias = [
  ["calculo", "espelhos", "estatistica"],
  ["direitoMat", "direitoCiv", "direitoConst"],
  ["planetas", "galaxias"],
];

// function setSelectCursos() {
  let i;
  let curso;
  for (i = 0; i < cursos.length; i++) {
    curso = new Option(cursos[i], cursos[i]);
    modelList.options.add(curso);
  }
// };

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

// setSelectCursos();
function openModal(edit = false, index = 0) {
  modal.classList.add('active')
  modal.onclick = e => {
    if (e.target.className.indexOf('modal-container') !== -1) {
      modal.classList.remove('active')
    }
  }
  if (edit) {
    sNome.value = itens[index].nome
    sFuncao.value = itens[index].funcao
    sSalario.value = itens[index].salario
    sCurso.value = itens[index].curso
    //sMateria.value = itens[index].materia
    SNota.value = itens[index].nota

    id = index
  } else {
    sNome.value = ''
    sFuncao.value = ''
    sSalario.value = ''
    sCurso.value = ''
    //sMateria.value = ''
    SNota.value = ''
  }
}

function editItem(index) {
  openModal(true, index);
}

function deleteItem(index) {
  itens.splice(index, 1)
  setItensBD()
  loadItens()
}

function insertItem(item, index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${item.nome}</td>
    <td>${item.funcao}</td>
    <td>${item.salario}</td>
    <td>${item.curso}</td>
    <td>${item.nota}</td>
    <td class="acao">
      <button onclick="editItem(${index})"><i class='bx bx-edit' ></i></button>
    </td>
    <td class="acao">
      <button onclick="deleteItem(${index})"><i class='bx bx-trash'></i></button>
    </td>
  `
  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  if (sNome.value == '' || sFuncao.value == '' || sSalario.value == '' || sCurso.value == '' || SNota.value == '') {
    return
  }

  e.preventDefault();
  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].salario = sSalario.value
    itens[id].curso = sCurso.value
    // itens[id].materia = sMateria.value
    itens[id].nota = SNota.value
  } else {
    itens.push({
      'nome': sNome.value,
      'funcao': sFuncao.value,
      'salario': sSalario.value,
      'curso': sCurso.value,
      // 'materia': sMateria.value,
      'nota': SNota.value
    })
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}
const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()