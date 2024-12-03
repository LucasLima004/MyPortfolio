import Glitch from "../../components/glitch";
import Code from "./code"
import myImage from '../../assets/imgs/MyPerson.jpeg'; 
import { Container, ContainerAbout, ContainerFooter, DescriptionText, Title, TransparentContainer } from "./style";
import { Messages } from "../../utils/Messages";
import HoverImageComponent from "../../components/image";

export const About = () => {
    return (
        <>
            <Container>
                <TransparentContainer>
                    <Glitch>
                        <Title>{Messages.titleAboutMe}</Title>
                    </Glitch>
                    <DescriptionText>
                        {Messages.textAboutMe}
                    </DescriptionText>
                    <HoverImageComponent imageSrc={myImage}/>
                </TransparentContainer>
                <ContainerAbout>    
                    <Code />
                </ContainerAbout>
            </Container>
            <ContainerFooter>{Messages.developBy}</ContainerFooter>
        </>
    );
};