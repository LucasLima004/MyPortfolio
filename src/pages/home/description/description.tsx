import { Messages } from "../../../utils/Messages";
import { DescriptionText } from "./style";

export const Description = () => {
    return(
        <>
            <DescriptionText>
                {Messages.homeMessage}
            </DescriptionText>
        </>
    );
};