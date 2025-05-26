import { useState } from 'react'
import './PerfilUsuario.css'

function PerfilUsuario({ imagem, nome, bio }) {
    const [novoNome, setNovoNome] = useState(nome)
    const [novaBio, setNovaBio] = useState(bio)

    const handleClick = () => {
        alert(`Você está seguindo ${novoNome}`)
    }

    const handleNomeChange = (e) => {
        setNovoNome(e.target.value)
    }

    const handleBioChange = (e) => {
        setNovaBio(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dados salvos: Nome - ${novoNome}, Bio - ${novaBio}`)
    }

    return (
        <div className='perfil-container'>
            <img src={imagem} alt={`Foto de ${novoNome}`} style={{ borderRadius: '50%', border: '3px solid #888', width: '150px', height: '150px' }} />

            <h2 className='titulo-nome'>{novoNome}</h2>
            <p className='bio'>{novaBio}</p>

            <button onClick={handleClick} style={{ backgroundColor: '#4CAF50', padding: '10px 20px', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>
                Seguir
            </button>

            <form onSubmit={handleSubmit} className='form-atualizar'>

                <input type="text" placeholder='Novo nome' value={novoNome} onChange={handleNomeChange} className='input-perfil' />

                <textarea placeholder='Nova bio' value={novaBio} onChange={handleBioChange} className='textarea-perfil'></textarea>

                <button type='submit' className='btn-submit'>Salvar</button>
            </form>
        </div>
    )
}

export default PerfilUsuario;