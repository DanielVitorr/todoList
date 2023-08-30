import { HeaderContainer, HomeContent } from './styles'
import Logo from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HomeContent>
        <img src={Logo} alt="" />
      </HomeContent>
    </HeaderContainer>
  )
}
