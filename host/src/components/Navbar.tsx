import React from 'react'
import { StyledNavbar, Title } from './Navbar.styles'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
    <Title>N5 Microfrontends - {('app')}</Title>
    {/* <LanguageSwitcher message="changeLanguage" /> */}
  </StyledNavbar>
  )
}

export default Navbar