import './App.css';

function BemVindo(props) {
  return (
    <>
      <h2 className='bem-vindo'>{props.mensagem}</h2>
    </>
  );
}

function FotoUsuario({ url }) {
  return (
    <img src={url} className="foto-usuario" />
  );
}

function CardUsuario({ nome, profissao, imagem }) {
  return (
    <div className="card-usuario">
      <FotoUsuario url={imagem} />
      <div className="info-usuario">
        <h3>{nome}</h3>
        <p>{profissao}</p>
      </div>
    </div>
  );
}

function Painel({ children }) {
  return (
    <div className='painel'>
      <h2 className='titulo-painel'>Painel Genérico</h2>
      {children}
    </div>
  )
}


function App() {
  const usuarios = [
    {
      nome: "Diogo Leite",
      profissao: "Desenvolvedor Full Stack",
      imagem: "https://i.pravatar.cc/100?img=13"
    },
    {
      nome: "Ana Souza",
      profissao: "Designer UX/UI",
      imagem: "https://i.pravatar.cc/100?img=32"
    },
    {
      nome: "Carlos Mendes",
      profissao: "Product Owner",
      imagem: "https://i.pravatar.cc/100?img=33"
    }
  ];

  return (
    <div className="App">
      <BemVindo mensagem="Olá, Diogo!" />
      {usuarios.map((usuario, index) => (
        <CardUsuario
          key={index}
          nome={usuario.nome}
          profissao={usuario.profissao}
          imagem={usuario.imagem}
        />
      ))}
      <Painel>
        <p>Este é um parágrafo dentro do Painel</p>
      </Painel>

      <Painel>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </Painel>

      <Painel>
        <button>Clique aqui</button>
      </Painel>
    </div>
  );
}


export default App;
