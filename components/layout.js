'use client'
import Container from 'react-bootstrap/Container'
import Header from './header'

export default function Layout({ children }) {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
}
