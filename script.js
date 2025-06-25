const divBotao = document.querySelector("#divBtn");
const mensagem = document.querySelector("#mensagem");
const botao = document.createElement('button');

botao.textContent = "Clique para ver uma mensagem!";
botao.classList.add("botao");

divBotao.appendChild(botao);

botao.addEventListener('click', () => {
    mensagem.innerHTML = "Bem-vindo(a)! Aqui compartilho um pouco da minha trajetória, dos meus hobbies e dos lugares que quero conhecer."
    setTimeout(() => {
        mensagem.innerHTML = '';
    }, 8000);
});