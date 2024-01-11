import { React, useRef, useState } from "react";
import axios from 'axios';
import { useHistory } from "react-router-dom";
import {
  Container,
  ContainerItens,
  H1,
  InputLabel,
  Input,
  Image,
  Button

} from './styles'
import People from '../../assets/people.svg'
import Arrow from '../../assets/arrow.svg'


function App() {

  const inputName = useRef()
  const inputIdade = useRef()
  const [users, setUsers] = useState([])
  const history = useHistory()

  async function addNewUser() {

    const { data: newUser } = await axios.post("http://localhost:3001/users", {
      name: inputName.current.value, age: inputIdade.current.value

    })


    setUsers([...users, newUser])

    history.push('/usuarios')

  }


  return (
    <Container>
      <Image alt='logo-pessoas' src={People} />
      <ContainerItens>
        <H1>Olá</H1>

        <InputLabel >Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputIdade} placeholder="Idade" />

        <Button onClick={addNewUser} >cadastrar <img alt="seta" src={Arrow} /></Button>

      </ContainerItens>

    </Container>
  )
}

export default App;
