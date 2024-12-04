import { Button, Container, IconsContainer, ImageContent, MenuContainer, ProjectsIcon, SelectedProject, TextSelected } from "./style";
import { ReactComponent as Android } from "./../../assets/imgs/android.svg"
import { ReactComponent as Network } from "./../../assets/imgs/network.svg"
import { ReactComponent as Bird } from "./../../assets/imgs/bird.svg"
import { ReactComponent as Task } from "./../../assets/imgs/task.svg"
import { ReactComponent as Crud } from "./../../assets/imgs/crud.svg"
import { ReactComponent as Spa } from "./../../assets/imgs/spa.svg"
import { useState } from "react";
import Glitch from "../../components/glitch";
import { Colors } from "../../utils/Colors";
import { Messages, ProjectDescriptions, ProjectsTitle, ProjectsURI } from "../../utils/Messages";

export const Portfolio = () => {
    const [selectProject, setSelectProject] = useState<string>("");


    const getProjectSelected = () => {
        switch (selectProject) {
            case "android":
                return <TextSelected>
                    <Glitch>{ProjectsTitle.mobile}</Glitch>
                    <p>{ProjectDescriptions.mobileProject}</p>
                    <Button>
                        <a href={ProjectsURI.mobile} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            case "bird":          
                return <TextSelected>
                    <Glitch>{ProjectsTitle.flappyBird}</Glitch>
                    <p>{ProjectDescriptions.flappyBird}</p> 
                    <Button>
                        <a href={ProjectsURI.flappyBird} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            case "crud":
                return <TextSelected>
                    <Glitch>{ProjectsTitle.crud}</Glitch>
                    <p>{ProjectDescriptions.crud}</p> 
                    <Button>
                        <a href={ProjectsURI.crud} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            case "network":
                return <TextSelected>
                    <Glitch>{ProjectsTitle.bigData}</Glitch>
                    <p>{ProjectDescriptions.bigData}</p> 
                    <Button>
                        <a href={ProjectsURI.bigData} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            case "spa":
                return <TextSelected>
                    <Glitch>{ProjectsTitle.spa}</Glitch>
                    <p>{ProjectDescriptions.spa}</p> 
                    <Button>
                        <a href={ProjectsURI.spa} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            case "task":
                return <TextSelected>
                    <Glitch>{ProjectsTitle.task}</Glitch>
                    <p>{ProjectDescriptions.task}</p>
                    <Button>
                        <a href={ProjectsURI.task} target="_blank">{Messages.repository}</a>
                    </Button>
                </TextSelected>;
            default:
                return <TextSelected>
                    <Glitch>{Messages.project}</Glitch>
                    <p>{Messages.projectText}</p>
                </TextSelected>;
        }
    };

    return (
        <>
            <Container>
                <IconsContainer>
                    <MenuContainer>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("android")}}>{<Android />}</ImageContent>
                        </ProjectsIcon>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("network")}}>{<Network />}</ImageContent>
                        </ProjectsIcon>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("bird")}}>{<Bird />}</ImageContent>
                        </ProjectsIcon>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("task")}}>{<Task />}</ImageContent>
                        </ProjectsIcon>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("crud")}}>{<Crud />}</ImageContent>
                        </ProjectsIcon>
                        <ProjectsIcon>
                            <ImageContent color={Colors.white} onClick={() => {setSelectProject("spa")}}>{<Spa />}</ImageContent>
                        </ProjectsIcon>
                    </MenuContainer>
                </IconsContainer>
                <SelectedProject>
                    {getProjectSelected()}
                </SelectedProject>
            </Container>
        </>
    );
}