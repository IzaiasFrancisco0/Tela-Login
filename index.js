"use strict";
const nome = document.getElementById("nome");
const senha = document.getElementById("senha");
const botao = document.getElementById("botao");
botao.addEventListener('click', (e) => {
    e.preventDefault();
    const nomeValue = nome.value;
    const senhaValue = senha.value;
    if (nomeValue.trim() !== '' && senhaValue.trim() !== '') {
        localStorage.setItem("nome:", nomeValue);
        localStorage.setItem("senha:", senhaValue);
        console.log(nomeValue, senhaValue);
    }
    else {
        alert("Digite um nome e senha correto...");
    }
    nome.value = '';
    senha.value = '';
});
