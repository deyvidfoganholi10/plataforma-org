# Plataforma ONG

## Descrição Top
Plataforma web moderna para ONGs, com páginas de apresentação, projetos e cadastro de voluntários. Desenvolvida com HTML5, CSS3 e JavaScript, oferece formulário interativo, validação de dados e design responsivo. Facilita a conexão entre voluntários e doadores de forma simples e elegante.

## Descrição Estendida
A **Plataforma ONG** é uma aplicação web completa, desenvolvida com **HTML5, CSS3 e JavaScript**, que serve como solução para a gestão de projetos sociais e cadastro de voluntários em organizações não governamentais. O projeto combina **design moderno, responsividade e interatividade**, proporcionando uma experiência fluida e intuitiva para todos os usuários, sejam administradores, voluntários ou doadores.

### Funcionalidades Principais
1. **Página Inicial (index.html)**  
   - Informações sobre a ONG: missão, visão e valores.  
   - Imagens ilustrativas e menu de navegação responsivo.  

2. **Página de Projetos (projetos.html)**  
   - Lista de projetos sociais, oportunidades de voluntariado e doações.  
   - Layout organizado e de fácil navegação.  

3. **Página de Cadastro (cadastro.html)**  
   - Formulário completo para cadastro de voluntários:  
     - Nome, E-mail, CPF, Telefone, Data de Nascimento, Endereço, CEP, Cidade e Estado.  
   - Validação nativa HTML5 e máscaras de CPF, telefone e CEP.  
   - Layout limpo, campos em linhas separadas e botão de envio com feedback via JavaScript.

4. **Estilo e Layout (style.css)**  
   - Design moderno, cores agradáveis e tipografia legível.  
   - Responsivo para desktop, tablet e celular.  

5. **JavaScript (script.js)**  
   - Validação de formulário e feedback visual após cadastro.  

### Tecnologias Utilizadas
- HTML5  
- CSS3  
- JavaScript  

### Trechos de Código

**HTML – Formulário de Cadastro**
```html
<form id="formCadastro">
  <label for="nome">Nome Completo</label>
  <input type="text" id="nome" name="nome" required>

  <label for="email">E-mail</label>
  <input type="email" id="email" name="email" required>

  <label for="cpf">CPF</label>
  <input type="text" id="cpf" name="cpf" required>

  <button type="submit">Cadastrar</button>
</form>

document.getElementById("formCadastro").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Cadastro realizado com sucesso!");
    this.reset();
});

JavaScript – Envio de Formulário
form input {
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 100%;
}
CSS – Estilo do Formulário
form button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}
form button:hover {
    background-color: #45a049;
}
