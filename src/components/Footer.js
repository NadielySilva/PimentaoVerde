import React from "react";

//importing style
import styled from "styled-components";

//importing components
import PrimaryTransparentSmallBtn from '../components/Buttons/PrimaryTransparentSmall';
import PrimaryContainedSmallBtn from '../components/Buttons/PrimaryContainedSmall.js';


//importing assets
import myCow from '../assets/cow.svg';
// import myCowOrange from '../assets/cowOrange.svg';
// import myIntagramIcon from '../assets/IntagramLightGreen.svg';

const Container = styled.div`
    font-family: 'Fredoka', sans-serif;
    font-weight: 200;
    width: 100vw;
    height: 55vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const SubContainer = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 100vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const SocialMedia = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 18vw;
    height: 30vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
`;

const AboutUs = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 18vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
`;

const Title3 = styled.h3`
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
`;

const NavSection = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 18vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
`;

const ContactUs = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 36vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
`;

const FooterImg = styled.img`
    width: 2vw;
    height: 3.6vh;
`;

const Payment = styled.div`
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    flex-direction: row;
`;

const Copyrights = styled.div`
    font-family: 'Fredoka', sans-serif;
    text-align: center;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Link = styled.a`
    color:inherit;
`;

function Footer (){
    return(
        <Container>
            <SubContainer>
                <SocialMedia>
                    <img/>
                    <PrimaryContainedSmallBtn><FooterImg src={myCow}/></PrimaryContainedSmallBtn>
                    <PrimaryContainedSmallBtn><FooterImg src={myCow}/></PrimaryContainedSmallBtn>
                    <PrimaryContainedSmallBtn><FooterImg src={myCow}/></PrimaryContainedSmallBtn>
                    <PrimaryContainedSmallBtn><FooterImg src={myCow}/></PrimaryContainedSmallBtn>
                </SocialMedia>
                <AboutUs>
                    <Title3>Institucional</Title3>
                    <Link href="#">Sobre nós</Link>
                    <Link href="#">Trabalhe na Pimenta Verde</Link>
                    <Link href="#">Seja um parceiro</Link>
                    <Link href="#">Termos de Uso</Link>
                    <Link href="#">Política de Privacidade</Link>
                </AboutUs>
                <NavSection>
                    <Title3>Navegue</Title3>
                    <Link href="#">Cardápio</Link>
                    <Link href="#">Planos</Link>
                    <Link href="#">Como Funciona</Link>
                    <Link href="#">Blog</Link>                    
                </NavSection>
                <ContactUs>
                    <Title3>Fale com a Pimenta Verde</Title3>
                    <p><FooterImg src={myCow}/>(67) 3693-4126 | (67) 2929-8216</p>
                    <p><FooterImg src={myCow}/>(67) 99823-6892</p>
                    <p><FooterImg src={myCow}/>falecom@pimentaverde.com.br</p>
                    <p><FooterImg src={myCow}/>segunda a sexta, das 8h às 22h</p>
                </ContactUs>
            </SubContainer>
            {/* <Payment>
                <p>Pagamento</p>
                <img/>
                <img/>
                <img/>
                <img/>
            </Payment> */}
            <Copyrights>
                <p>© Pimentão Verde - Todos os direitos reservados. Rua Ave do Paraíso, 792. Residencial Damha III. Campo Grande - MS | CEP: 79046-238 | CNPJ: 56.685.556/0001-13</p>
            </Copyrights>
        </Container>
    )
};

export default Footer