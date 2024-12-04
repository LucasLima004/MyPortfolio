import { TitleDescription, TitleName } from "./style";
import Glitch from "../../../components/glitch";
import { Messages } from "../../../utils/Messages";

export const Title = () => {
    return(
        <>            
            <Glitch>
                <TitleName>{Messages.nameDeveloper}</TitleName>
                <TitleDescription>{Messages.typeDevelopr}</TitleDescription>
            </Glitch>
        </>
        
    );
};