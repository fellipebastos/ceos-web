import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdArrowDropDown,
  MdDashboard,
  MdMessage,
  MdStorage,
} from 'react-icons/md';
import { Form } from '@unform/web';

// import { useAuth } from '../../hooks/auth';

import logoCeos from '../../assets/logo-ceos-blue.png';
import userImg from '../../assets/thumb-profile.png';

import Button from '../Button';
import Input from '../Input';

import { Container, Menu, MenuLink, Profile } from './styles';

export default function Header() {
  // const { user } = useAuth();
  const { pathname } = useLocation();
  const [activeProfileForm, setActiveProfileForm] = useState(false);

  const handleSubmit = (data) => {
    console.log(data);
  };

  // if (!user) return null;

  return (
    <Container>
      <img src={logoCeos} alt="Ceos" />

      <Profile>
        <Button onClick={() => setActiveProfileForm(!activeProfileForm)}>
          <img src={userImg} alt="João Carvalho" />
          João Carvalho
          <MdArrowDropDown />
        </Button>

        {activeProfileForm && (
          <Form onSubmit={handleSubmit}>
            <Input
              id="name"
              name="name"
              label="Nome"
              placeholder="Digite seu nome"
            />

            <Input
              id="last_name"
              name="last_name"
              label="Sobrenome"
              placeholder="Digite seu sobrenome"
            />

            <Input
              id="email"
              name="email"
              label="Email"
              placeholder="Digite seu email"
            />

            <Input
              id="whatsapp"
              name="whatsapp"
              label="Whatsapp"
              placeholder="Digite seu celular"
            />

            <Button type="submit">Salvar</Button>
            <hr />
            <Button>Sair</Button>
          </Form>
        )}
      </Profile>

      <Menu>
        <MenuLink active={pathname === '/dashboard'}>
          <Link to="/dashboard">
            <MdDashboard size={25} />
            Dashboard
          </Link>
        </MenuLink>

        <MenuLink active={pathname === '/messages'}>
          <Link to="/messages">
            <MdMessage size={25} />
            Mensagens
          </Link>
        </MenuLink>

        <MenuLink active={pathname === '/stock'}>
          <Link to="/stock">
            <MdStorage size={25} />
            Estoque
          </Link>
        </MenuLink>
      </Menu>
    </Container>
  );
}
