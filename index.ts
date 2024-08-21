const nome = document.getElementById("nome") as HTMLInputElement
const senha = document.getElementById("senha") as HTMLInputElement
const botao = document.getElementById("botao") as HTMLButtonElement

botao.addEventListener('click', (e: MouseEvent) => {
     e.preventDefault()
    const nomeValue: string = nome.value;
    const senhaValue: string = senha.value;

    if(nomeValue.trim() !== '' && senhaValue.trim() !== ''){
        localStorage.setItem("nome:", nomeValue);
        localStorage.setItem("senha:", senhaValue);
     
        console.log(nomeValue, senhaValue)
    } else{
        alert("Digite um nome e senha correto...")
    }
 
   nome.value = '';
   senha.value = '';
})



