import React from "react";
import CardProduto from "./CardProduto";
import './App.css'

const produtos = [
  {
    nome: "Fone de ouvido Bluetooth",
    preco: "130.00",
    descricao: "Audio de alta qualidade com conexão sem fio",
    imagem: "https://lojamultilaser.vteximg.com.br/arquivos/ids/1361194-1000-1000/9481-00.jpg?v=638718196780230000"
  },
  {
    nome: "Smartwatch ",
    preco: "360.00",
    descricao: "Relógio de pulso que registra suas atividades",
    imagem: "https://images.tcdn.com.br/img/img_prod/1087072/relogio_smartwatch_x_watch_preto_com_alexa_1460_1_acdfd0a488affed854938b88c640670c.jpg"
  },
  {
    nome: "Notebook",
    preco: "3000.00",
    descricao: "Melhor notebook custo benefício do mercado",
    imagem: "https://imgs.casasbahia.com.br/55066981/1g.jpg?imwidth=1000"
  },
]

function App() {
  return (
    <div className="catalogo">
      {produtos.map((produto, index) => (
        <CardProduto
          key={index}
          nome={produto.nome}
          preco={parseFloat(produto.preco)}
          descricao={produto.descricao}
          imagem={produto.imagem}
        />
      ))}

    </div>
  )
}

export default App;