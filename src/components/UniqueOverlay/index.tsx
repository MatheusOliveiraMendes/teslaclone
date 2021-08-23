/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
//import { useTransform } from 'framer-motion'

//import { useWrapperScroll } from '../Model'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  //const { scrollYProgress } = useWrapperScroll()

 // const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer >
        <ul>
          <li>
            <a href="#">Tesla © 2021</a>
          </li>
          <li>
            <a href="#">Política de privacidade e informações legais</a>
          </li>
          <li>
            <a href="#">Contato</a>
          </li>
          <li>
            <a href="#">Carreiras</a>
          </li>
          <li>
            <a href="#">Notícias</a>
          </li>
          <li>
            <a href="#">Onde estamos</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay