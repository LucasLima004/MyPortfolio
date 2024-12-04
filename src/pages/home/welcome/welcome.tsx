import { Messages } from "../../../utils/Messages";
import { Message } from "./style";

export const WelcomeMessage = () => {
    return(
        <>
            <Message>
                {Messages.welcome}  
            </Message>
        </>
    );
};