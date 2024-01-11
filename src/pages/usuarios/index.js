import { useState, React, useEffect } from "react";
import { useHistory } from "react-router-dom";

import {
  Container,
  ContainerItens,
  H1,
  Image,
  Button,
  Li

} from './styles'

import Avatar from '../../assets/avatar.svg'
import Arrow from '../../assets/arrow.svg'
import Trash from '../../assets/trash.svg'

import axios from "axios";


function Users() {

  const history = useHistory()

  const [users, setUsers] = useState([])


  useEffect(() => {

    async function fetchUsers() {
      const { data: newUsers } = await axios.get("http://localhost:3001/users")

      setUsers(newUsers)
    }

    fetchUsers()
  })

  //deletar usuarios
  async function userDelete(useId) {

    await axios.delete(`http://localhost:3001/users/${useId}`)

    const newUsers = users.filter(user => user.id !== useId)

    setUsers(newUsers)
  }

  //navegar entre as paginas
  function goBack() {
    history.push('/')
  }


  return (
    <Container>
      <Image alt='logo-pessoas' src={Avatar} />
      <ContainerItens>
        <H1>Usuários</H1>
        <ul>
          {
            users.map(user => (
              <Li key={user.id}>
                <p>{user.name}</p><p>{user.age}</p>
                <button onClick={() => userDelete(user.id)}><img src={Trash} alt="lixeira" /></button>
              </Li>

            ))
          }
        </ul>
        <Button onClick={goBack}><img alt="seta" src={Arrow} /> Voltar</Button>

      </ContainerItens>

    </Container>
  )
}

export default Users;
