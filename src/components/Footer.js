import React from "react";

//importing style
import styled from "styled-components";

//importing assets
import myCow from '../assets/cow.svg'

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
    background-color: pink;
`;

const AboutUs = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 18vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    background-color: pink;
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
    background-color: pink;
`;

const ContactUs = styled.div`
    font-family: 'Fredoka', sans-serif;
    width: 36vw;
    height: 30vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: pink;
`;

const FooterImg = styled.img`
    width: 2.25vw;
    height: auto;
`;

const Payment = styled.div`
    font-family: 'Fredoka', sans-serif;
    font-weight: 400;
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    background-color: pink;
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
    background-color: pink;
`;

function Footer (){
    return(
        <Container>
            <SubContainer>
                <SocialMedia>
                    <img/>
                    <button>Instagram</button>
                    <button>Facebook</button>
                    <button>Pinterest</button>
                    <button>Twitter</button>
                </SocialMedia>
                <AboutUs>
                    <Title3>Institucional</Title3>
                    <a href="#">Sobre nós</a>
                    <a href="#">Trabalhe na Pimenta Verde</a>
                    <a href="#">Seja um parceiro</a>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Política de Privacidade</a>
                </AboutUs>
                <NavSection>
                    <Title3>Navegue</Title3>
                    <a href="#">Cardápio</a>
                    <a href="#">Planos</a>
                    <a href="#">Como Funciona</a>
                    <a href="#">Blog</a>                    
                </NavSection>
                <ContactUs>
                    <Title3>Fale com a Pimenta Verde</Title3>
                    <p><FooterImg src={myCow}/>(67) 3693-4126</p>
                    <p><FooterImg/>(67) 2929-8216</p>
                    <p><FooterImg src={myCow}/>(67) 99823-6892</p>
                    <p><FooterImg src={myCow}/>falecom@pimentaverde.com.br</p>
                    <p><FooterImg src={myCow}/>segunda a sexta, das 8h às 22h</p>
                </ContactUs>
            </SubContainer>
            <Payment>
                <p>Pagamento</p>
                <img/>
                <img/>
                <img/>
                <img/>
            </Payment>
            <Copyrights>
                <p>© Pimentão Verde - Todos os direitos reservados. Rua Ave do Paraíso, 792. Residencial Damha III. Campo Grande - MS | CEP: 79046-238 | CNPJ: 56.685.556/0001-13</p>
            </Copyrights>
        </Container>
    )
};

export default Footer