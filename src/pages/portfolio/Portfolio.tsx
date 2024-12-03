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

export const Portfolio = () => {
    const [selectProject, setSelectProject] = useState<string>("");


    const getProjectSelected = () => {
        switch (selectProject) {
            case "android":
                return <TextSelected>
                    <Glitch>
                        Project Android
                    </Glitch>
                    <p>
                        O projeto android utilizado na faculdade, consiste em um aplicativo que realiza a busca de locais próximos a partir da localização atual do dispositivo usando ônibus como método de transporte.
                    </p> 
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/Vector_mobile_app" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            case "bird":          
                return <TextSelected>
                    <Glitch>
                        Project Flappy Bird
                    </Glitch>
                    <p>
                        O projeto é um jogo na web, que consiste no clone do Flappy Bird, com movimentações e colisões.
                    </p> 
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/Flappy_Bird_Game" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            case "crud":
                return <TextSelected>
                    <Glitch>
                        Project C.R.U.D
                    </Glitch>
                    <p>
                        O projeto consiste em realizar o C.R.U.D. de usuários, utilizando o react.
                    </p> 
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/React-User-registration" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            case "network":
                return <TextSelected>
                    <Glitch>
                        Project BigData
                    </Glitch>
                    <p>
                        Apresentação dos dados com processamento de grande massa de dados no contexto matemático aplicado ao clima e análise temporal entre o range de 1 ano de dados coletados com hiatos de 4 meses.
                    </p> 
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/BigDataWithPython" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            case "spa":
                return <TextSelected>
                    <Glitch>
                        Project S.P.A.
                    </Glitch>
                    <p>
                        O projeto consiste em um single page application, que controla os contextos a serem renderizados de forma simples usando Angular, carregando já todos elementos de forma mais eficiente permitindo melhor velocidade de processamento e renderização do site.
                    </p> 
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/BigDataWithPython" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            case "task":
                return <TextSelected>
                    <Glitch>
                        Project Task
                    </Glitch>
                    <p>
                        O projeto é feito em java e consiste em um project manager, que a partir desse interações com uma interface gráfica usando Swing ele persiste em base e faz interações a partir dos projetos e tarefas.    
                    </p>
                    <Button type="submit">
                        <a href="https://github.com/LucasLima004/Project_and_Task_Manager" target="_blank">Repositório</a>
                    </Button>
                </TextSelected>;
            default:
                return <TextSelected>
                    <Glitch>
                        Projetos
                    </Glitch>
                    <p>
                        Aperte nos cards para validar os projetos realizados.
                    </p>
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