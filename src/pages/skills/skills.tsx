import SkillBar from './skillbar';
import { Container, ContainerBackSkill, ContainerFrontSkill, ContainerSkill, DescriptionText, Title } from './style';
import Glitch from '../../components/glitch';

export const Skills = () => {
  return (
    <>
      <Glitch>
        <Title>
          Hard Skills
        </Title>
      </Glitch>
      <DescriptionText>
        Olá, estas são algumas hard skills minhas, estou atuando a um tempo na área de desenvolvimento de software, inicialmente sendo apenas Back-end, mas com o tempo migrei para ser fullstack.
        Obtive ao longo desse tempo atuando conhecimento em Front-End, Back-End, banco de dados relacional, banco de dados não relacional, mensageria, containers, testes unitários e de integração, algumas skills de devOps e muito mais.
      </DescriptionText>
      <Container>
        <ContainerFrontSkill>
          <Title>Front-End Skills</Title>
          <ContainerSkill>
            <SkillBar title={'TypeScript'} percentage={80} text={'TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.'}/>
            <SkillBar title={'Redux'} percentage={50} text={'Redux é uma biblioteca JavaScript de código aberto para gerenciar o estado do aplicativo. É mais comumente usado com bibliotecas como React ou Angular para criar interfaces de usuário.'}/>
            <SkillBar title={'Nest'} percentage={80} text={'NestJS é um framework Node.js de código aberto destinado ao desenvolvimento de aplicativos do lado do servidor.['}/>
            <SkillBar title={'React'} percentage={80} text={'O React é uma biblioteca front-end JavaScript de código aberto com foco em criar interfaces de usuário em páginas web.'}/>
            <SkillBar title={'JQuery'} percentage={40} text={'jQuery é uma biblioteca livre que contém funções da linguagem de programação JavaScript que interage com páginas em HTML, desenvolvida para simplificar os scripts executados/interpretados no navegador de internet do usuário.'}/>
            <SkillBar title={'Angular'} percentage={60} text={'Angular é uma plataforma de aplicações web de código-fonte aberto e front-end baseado em TypeScript liderado pela Equipe Angular do Google e por uma comunidade de indivíduos e corporações.'}/>
            <SkillBar title={'Bootstrap'} percentage={20} text={'Bootstrap é um framework web com código-fonte aberto para desenvolvimento de componentes de interface e front-end para sites e aplicações web, usando HTML, CSS e JavaScript, baseado em modelos de design para a tipografia, melhorando a experiência do usuário em um site amigável e responsivo.'}/>
            <SkillBar title={'Styled-Components'} percentage={80} text={'Styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript.'}/>
            <SkillBar title={'Vue'} percentage={30} text={'Vue.js é um framework JavaScript de código-aberto, focado no desenvolvimento de interfaces de usuário e aplicativos de página única.'}/>
            <SkillBar title={'Jest'} percentage={70} text={'Jest é um framework de testes unitários em JavaScript que permite escrever e executar testes de forma simples e eficaz.'}/>
            <SkillBar title={'Gulp'} percentage={20} text={'Gulp.js é uma ferramenta de automação de tarefas em JavaScript.'}/>
            <SkillBar title={'WebPack'} percentage={20} text={'Webpack é uma ferramenta de build para JavaScript que agrupa arquivos em um ou mais bundles, facilitando o desenvolvimento e a manutenção do código.'}/>
          </ContainerSkill>
        </ContainerFrontSkill>
        <ContainerBackSkill>
          <Title>Back-End Skills</Title>
          <ContainerSkill>
            <SkillBar title={'SpringBoot'} percentage={90} text={'Spring Boot é um framework Java que permite a criação de aplicações Spring de forma simplificada'}/>
            <SkillBar title={'Apache Kafka'} percentage={80} text={'Apache Kafka é uma plataforma open-source de processamento de streams desenvolvida pela Apache Software Foundation, escrita em Scala e Java.'}/>
            <SkillBar title={'Node'} percentage={80} text={'Node.js é um software de código aberto, multiplataforma, baseado no interpretador V8 do Google e que permite a execução de códigos JavaScript fora de um navegador web.'}/>
            <SkillBar title={'Python'} percentage={50} text={'Python é uma linguagem de programação de alto nível, interpretada de script, imperativa, orientada a objetos, funcional, de tipagem dinâmica e forte.'}/>
            <SkillBar title={'AWS SNS/SQS'} percentage={30} text={'O Amazon SQS e o Amazon SNS são serviços de mensagens da Amazon Web Services (AWS) que permitem a comunicação entre componentes de software.'}/>
            <SkillBar title={'MongoDB'} percentage={70} text={'MongoDB é um software de banco de dados orientado a documentos livre, de código aberto e multiplataforma.'}/>
            <SkillBar title={'MySql'} percentage={60} text={'O MySQL é um sistema de gerenciamento de banco de dados (SGBD), que utiliza a linguagem SQL.'}/>
            <SkillBar title={'Redshift'} percentage={70} text={'O Amazon Redshift é um data warehouse em nuvem gerenciado pela AWS que permite processar dados em grande escala de forma rápida e eficiente.'}/>
            <SkillBar title={'PostgresSQL'} percentage={70} text={'PostgreSQL é um sistema gerenciador de banco de dados objeto relacional (SGBD), desenvolvido como projeto de código aberto.'}/>
            <SkillBar title={'Maven'} percentage={50} text={'Maven é uma ferramenta de automação de compilação utilizada primariamente em projetos Java.'}/>
            <SkillBar title={'Gradle'} percentage={80} text={'Gradle é um sistema de automação de compilação de código aberto que se baseia nos conceitos de Apache Ant e Apache Maven e introduz uma linguagem de domínio específico (DSL) baseada em Groovy em vez do XML usado pelo Apache Maven para declarar a configuração do projeto.'}/>
            <SkillBar title={'Kubernetes'} percentage={70} text={'Kubernetes é um sistema de orquestração de contêineres open-source que automatiza a implantação, o dimensionamento e a gestão de aplicações em contêineres.'}/>
            <SkillBar title={'Docker'} percentage={80} text={'Docker é um conjunto de produtos de plataforma como serviço (PaaS) que usam virtualização de nível de sistema operacional para entregar software em pacotes chamados contêineres.'}/>
            <SkillBar title={'Prometheus'} percentage={60} text={'Prometheus é um aplicativo de software livre usado para monitoramento de eventos e alertas.'}/>
            <SkillBar title={'Grafana'} percentage={60} text={'Grafana é uma aplicação web de análise de código aberto multiplataforma e visualização interativa da web.'}/>
            <SkillBar title={'Terraform'} percentage={30} text={'Terraform é uma ferramenta de código aberto que permite criar, alterar e versionar infraestrutura de nuvem de forma segura e eficiente.'}/>
            <SkillBar title={'Ansible'} percentage={30} text={'Ansible é uma ferramenta de TI de código aberto para gerenciar, automatizar, configurar servidores (tipo Unix e Microsoft Windows) e, implantar aplicativos, a partir de uma localização central (normalmente de um sistema Unix).'}/>
            <SkillBar title={'JUnit'} percentage={90} text={'O JUnit é um framework open-source, que se assemelha ao raio de testes software java, criado por Erich Gamma e Kent Beck, com suporte à criação de testes automatizados na linguagem de programação Java.'}/>
          </ContainerSkill>
        </ContainerBackSkill>
      </Container>
    </>
  );
};
