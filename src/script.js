const carregarLinks = async()=>{
    var myUrl = 'https://pastebin.com/raw/htinJKEF';
    var proxy = 'https://cors-anywhere.herokuapp.com/';
const res = await fetch(proxy+myUrl,{

method:"GET"
});
const data = await res.json();
  
console.log(data);
  
var link_favorito = document.getElementById("marcadores_pasterbin");
  

for ( var i=0 ; i < data.length; i++){
  var titulo = document.createElement("p");
  titulo.innerHTML += `<img src="https://png.pngtree.com/element_pic/16/11/19/3bcc8db55bdecafcd59753753a4f0aa9.jpg" alt="Favoritos" width="15" height="15"><a href="${data[i].url}" target="_blank">${data[i].nome}<font color="green">- pasterbin.com</font> - [PASTERBIN] <font color="black">adicionado em 24 de mar. de 2023</font></a>` ;
  link_favorito.appendChild(titulo);
}
}

carregarLinks();

function pesquisar(){
 var inputPesquisar = document.getElementById("pesquisa_barra").value;
  var botaoPesquisar = document.getElementById("botao")
 var linkPesquisa = `https://www.google.com/search?q=${inputPesquisar}`;
  botaoPesquisar.setAttribute("href", linkPesquisa);
 // console.log(inputPesquisar)
}


//pesquisar();

//https://pastebin.com/raw/FWrSkJH1
 
// Documentação API Fetch Proxy:

//https://developer.mozilla.org/pt-BR/docs/Web/API/Element/innerHTML

//https://developer.mozilla.org/en-US/docs/Web/API/Document/write

//https://github.com/Rob--W/cors-anywhere/issues/301

//https://pastebin.com/raw/ycwqYKZJ