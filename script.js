//lista para armazenar os jogadores
var jogadores = []

function adicionarPlayer(){
    //variavel que pega o nome do jogador novo
    var player = document.querySelector("#player").value;

    //console.log(player);

    //classe para criar novos jogadores
    class players {
        nome;
        pontos = 0;


        constructor(nome, pontos){
            this.nome = nome
            this.pontos = pontos
        }
    }
    
    
    var playerT = new players(player,0);

    
    playerT.nome = player;

    jogadores.push(playerT);
    
    console.log(jogadores);
    
}

console.log(jogadores)

function criarTabela(){
    var tabela = document.createElement("table")
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");
}

/*function criarTabela(conteudo) {
    var tabela = document.createElement("table");
    var thead = document.createElement("thead");
    var tbody=document.createElement("tbody");
    var thd=function(i){return (i==0)?"th":"td";};
    for (var i=0;i<conteudo.length;i++) {
      var tr = document.createElement("tr");
      for(var o=0;o<conteudo[i].length;o++){
        var t = document.createElement(thd(i));
        var texto=document.createTextNode(conteudo[i][o]);
        t.appendChild(texto);
        tr.appendChild(t);
      }
      (i==0)?thead.appendChild(tr):tbody.appendChild(tr);
    }
    tabela.appendChild(thead);
    tabela.appendChild(tbody);
    return tabela;
  }
  document.getElementById("tabela").appendChild(criarTabela([
    ["id", "nome",     "idade"],
    [1,    "matheus",  16],
    [2,    "cristian", 16],
    [3,    "pedro",    10],
    [4,    "henrique", 10]
  ]));*/
