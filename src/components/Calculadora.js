import './calculadora.css'
import { Input, Button } from 'reactstrap'
import { useState } from 'react'

const informarPeso = (setarValores) => {
    return ( <div>
            <label>
                Informe o seu peso
                <Input bsSize="sm" name='peso' onChange={(e) => setarValores(e)}/>
            </label>
            </div> )
}

const informarAltura = (setarValores) => {
    return ( <div>
                <label>
                    Informe a sua altura
                    <Input bsSize="sm" name='altura' onChange={(e) => setarValores(e)}/>
                </label>
            </div> )
}

const botao = (peso, altura, setResultado) => {
    return ( <div>
            <section>
                    <Button active color="light" outline onClick={() => somaResultado(peso, altura, setResultado)}>Calcular</Button>
            </section>
            </div> )
}

const tabelaIMC = () => {
    return (
        <table border='1' style={{borderCollapse: 'collapse'}}>
            <thead>
                    <th>Classificação</th>
                    <th>IMC</th>
            </thead>
            <tbody>
                <tr>
                    <td>Abaixo do peso</td>
                    <td>Abaixo de 18,5</td>
                </tr>
                <tr>
                    <td>Peso normal</td>
                    <td>Entre 18,5 e 24,9</td>
                </tr>
                <tr>
                    <td>Sobrepeso</td>
                    <td>Entre 25 e 29,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau I</td>
                    <td>Entre 30 e 34,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau II</td>
                    <td>Entre 35 e 39,9</td>
                </tr>
                <tr>
                    <td>Obesidade Grau III ou Mórbida</td>
                    <td>Maior que 40</td>
                </tr>
            </tbody>
        </table>
    )
}

const somaResultado = (peso, altura, setResultado) => {
    setResultado(peso / (altura**2))
}

const mostrarResultado = (resultado) => {
    return (<div>Resultado: {resultado.toFixed(2)}</div> )
}

export default function Calculadora() {
    const [ dados, setDados ] = useState({peso: 0, altura: 0})
    const [ resultado, setResultado ] = useState(null)

    const setarValores = (e) => {

        if(e.target.getAttribute('name') === 'peso'){
            setDados({peso: e.target.value, altura: dados.altura})
        } else {
            setDados({peso: dados.peso, altura: e.target.value})
        }
        console.log(dados)
    }

    return(
        <main>
                <h2>Calculadora IMC</h2>
                {informarPeso(setarValores)}
                {informarAltura(setarValores)}
                {botao(dados.peso, dados.altura, setResultado)}
                {resultado ? mostrarResultado(resultado) : null}
                {tabelaIMC()}
        </main>
    )
}
