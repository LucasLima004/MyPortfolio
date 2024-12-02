import Description from "./description";
import { ContainerDescription } from "./style";
import Title from "./title";
import Welcome from "./welcome";

export const Home = () => {
    return(
        <>
            <Title/>
            <ContainerDescription>
                <Welcome/>
                <Description/>
            </ContainerDescription>
        </>
    );
};