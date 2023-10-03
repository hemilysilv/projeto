const botoes = document.querySelectorAll('.botao');
//quando clicar no botao do personagem mostrar informacoes do personagem
//pdgar os personagens do js pra poder mostrar ou esconder as informaçoes dele
const personagens = document.querySelector(".personagem");

//objetivo quando clicar no botao do personagem marcar o botao selecionado//
//pegar os bototes no js pra poder verificar quando o usuario clicar em cima de um deles*/
botoes.forEach((botao, indice) => {//ligado como console.log(personagem)*/
     botao.addEventListener("click", () =>{
     // verificar se ja existe um botao selecionado se sim, devemos remover a selecao dele
    desselecionarBotao();
    desselecioanarPersonagem();
 //adicionar classe selecionado no botao que o ususario clicou 
     botao.classList.add("selecionado");
     personagens[indice].classList.add("selecionado");
      //verificar se ja existe um personagem selecionado se sim devemos remover a selecao dele*/
      //adicionar a classe "selecionado" no personagem que o usuario selecionou
        
     });
    
});

function desselecioanarPersonagem() {
   const personagemSelecionado = document.querySelector(".personagem.selecionado");
   personagemSelecionado.classList.remove("selecionado");
}

function desselecioanarPersonagem() {
   const botaoSelecionado = document.querySelector(".botao.selecionado");
   botaoSelecionado.classList.remove("selecionado");
}
