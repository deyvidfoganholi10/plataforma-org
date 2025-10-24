// ===== Seleciona o formulário =====
const form = document.getElementById('form-cadastro');

// ===== Máscaras simples =====
const cpf = document.getElementById('cpf');
const telefone = document.getElementById('telefone');
const cep = document.getElementById('cep');

cpf.addEventListener('input', () => {
  let valor = cpf.value.replace(/\D/g, '');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d)/, '$1.$2');
  valor = valor.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  cpf.value = valor;
});

telefone.addEventListener('input', () => {
  let valor = telefone.value.replace(/\D/g, '');
  valor = valor.replace(/^(\d{2})(\d)/g, '($1) $2');
  valor = valor.replace(/(\d{5})(\d{4})$/, '$1-$2');
  telefone.value = valor;
});

cep.addEventListener('input', () => {
  let valor = cep.value.replace(/\D/g, '');
  valor = valor.replace(/(\d{5})(\d)/, '$1-$2');
  cep.value = valor;
});

// ===== Validação e envio =====
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita envio padrão

  // Pega os valores
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const cpfValor = cpf.value.trim();
  const telefoneValor = telefone.value.trim();
  const data = document.getElementById('dataNascimento').value.trim();
  const endereco = document.getElementById('endereco').value.trim();
  const cepValor = cep.value.trim();
  const cidade = document.getElementById('cidade').value.trim();
  const estado = document.getElementById('estado').value.trim();

  // Verifica se algum campo está vazio
  if (!nome || !email || !cpfValor || !telefoneValor || !data || !endereco || !cepValor || !cidade || !estado) {
    alert('Por favor, preencha todos os campos corretamente!');
    return;
  }

  // Alerta de sucesso elegante
  alert(`Cadastro realizado com sucesso!\n\nNome: ${nome}\nEmail: ${email}`);

  // Limpa o formulário
  form.reset();
});

