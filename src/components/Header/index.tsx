import * as S from './styled'

import Logo from '@assets/logo.png'

export function Header() {
    return (
        <S.Container>
            <S.LogoImage>
                <S.ImgLogo source={Logo} resizeMode='contain' />
            </S.LogoImage>
            <S.ProfileImage />
        </S.Container>
    )
}