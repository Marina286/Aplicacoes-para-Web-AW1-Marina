//formulário - validação
let form = document.getElementsByClassName('form formjs');

let name = form.elements['nome'];
let nome = nome.value;
let name = form.elements['livro'];
let livro = livro.value;
let name = form.elements['email'];
let email = email.value;
let name = form.elements['cpf'];
let cpf = cpf.value;
let name = form.elements['mensagem'];
let mensagem = mensagem.value;

// Função para checar se o campo do input não está vazio enquanto está submetendo
function requireValue(select) {
  return !(select.value.trim() === '');
}
// Event listener to perform the validation when user clicks on submit button
form.addEventListener('submit', (event) => {
  requiredFields.forEach((select) => {
      valid = valid|requireValue(select.select);
  });
  if (!valid) {
      event.preventDefault();
  }
});

// Máscara

const masks = {

    cpf (value) {
      return value
        .replace(/\D+/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    } }

    document.querySelectorAll('input').forEach($input => {
        const field = $input.dataset.js
      
        $input.addEventListener('input', e => {
          e.target.value = masks[field](e.target.value)
        }, false)
      })