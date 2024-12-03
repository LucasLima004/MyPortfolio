import Glitch from "../../components/glitch";
import HoverImageComponent from "../../components/image/ImageContainer";
import Text from "./code"
import myImage from '../../assets/imgs/MyPerson.jpeg'; 
import { Container, ContainerAbout, ContainerFooter, DescriptionText, Title, TransparentContainer } from "./style";

export const About = () => {
    return (
        <>
            <Container>
                <TransparentContainer>
                    <Glitch>
                        <Title>Sobre mim</Title>
                    </Glitch>
                    <DescriptionText>
                        Olá, sou uma pessoa que gosta bastante de jogos de video-game principalmente os de FPS e single-player. Passei um tempo também fazendo animações e design
                        gráfico, fazendo ilustrações, edições de foto, modelagem 3D com texturização e renderização, animações 3D e 2D.
                    </DescriptionText>
                    <HoverImageComponent imageSrc={myImage}/>
                </TransparentContainer>
                <ContainerAbout>    
                    <Text />
                </ContainerAbout>
            </Container>
            <ContainerFooter>Desenvolvido por Lucas Lima</ContainerFooter>
        </>
    );
};