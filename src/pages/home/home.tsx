import Description from "./description";
import { ContainerDescription } from "./style";
import Title from "./title";
import WelcomeMessage from "./welcome";

export const Home = () => {
    return(
        <>
            <Title/>
            <ContainerDescription>
                <WelcomeMessage/>
                <Description/>
            </ContainerDescription>
        </>
    );
};