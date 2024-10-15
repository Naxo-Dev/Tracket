import { useState } from 'react';
import './App.css'


function App() {
  const [first, setfirst] = useState('Registro')

  const btnEstado = (e: React.MouseEvent<HTMLButtonElement>) => {
    const target = e.target as HTMLButtonElement;
    const estado = target.value
    const Ternario = estado === 'Registro' ? 'Login' : 'Registro'
    setfirst(Ternario)
  }

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
  }


  return (
    <>
      <div className='ContainerForm'>
        <button onClick={btnEstado} value={first}> {first} </button>
        {
          first == 'Registro' ? <Login form_submit={formSubmit} /> : <Registro form_submit={formSubmit} />
        }
      </div>
    </>
  )
}


//Pasar a componente
type RegistroProps = {
  form_submit: (e: React.FormEvent<HTMLFormElement>) => void;
};

function Registro({ form_submit }: RegistroProps) {
  return (
    <form onSubmit={form_submit} className='session sessionR'>
      <h2>Registro</h2>
      <input type="email" placeholder='Email' />
      <input type="password" placeholder='Password' />
      <input type="password" placeholder='Password' />
      <button>Registrar</button>
    </form>
  )
}

function Login({ form_submit }: RegistroProps) {
  return (
    <form onSubmit={form_submit} className='session sessionL'>
      <h2>Iniciar Session</h2>
      <input type="email" placeholder='Email' />
      <input type="password" placeholder='Password' />
      <button>Login</button>
    </form>
  )
}

export default App
