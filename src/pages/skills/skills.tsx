import SkillBar from './skillbar';
import { Container, ContainerBackSkill, ContainerFrontSkill, ContainerSkill, DescriptionText, Title } from './style';
import Glitch from '../../components/glitch';
import { HardSkills, SkillsMessages } from '../../utils/Messages';

export const Skills = () => {
  return (
    <>
      <Glitch>
        <Title>{SkillsMessages.titleHardSkill}</Title>
      </Glitch>
      <DescriptionText>{SkillsMessages.textSkill}</DescriptionText>
      <Container>
        <ContainerFrontSkill>
          <Title>{SkillsMessages.frontEnd}</Title>
          <ContainerSkill>
            <SkillBar title={'TypeScript'} percentage={80} text={HardSkills.typescript}/>
            <SkillBar title={'Redux'} percentage={50} text={HardSkills.redux}/>
            <SkillBar title={'Nest'} percentage={80} text={HardSkills.nest}/>
            <SkillBar title={'React'} percentage={80} text={HardSkills.react}/>
            <SkillBar title={'JQuery'} percentage={40} text={HardSkills.jQuery}/>
            <SkillBar title={'Angular'} percentage={60} text={HardSkills.angular}/>
            <SkillBar title={'Bootstrap'} percentage={20} text={HardSkills.bootstrap}/>
            <SkillBar title={'Styled-Components'} percentage={80} text={HardSkills.styledComponent}/>
            <SkillBar title={'Vue'} percentage={30} text={HardSkills.vue}/>
            <SkillBar title={'Jest'} percentage={70} text={HardSkills.jest}/>
            <SkillBar title={'Gulp'} percentage={20} text={HardSkills.gulp}/>
            <SkillBar title={'WebPack'} percentage={20} text={HardSkills.webpack}/>
          </ContainerSkill>
        </ContainerFrontSkill>
        <ContainerBackSkill>
          <Title>{SkillsMessages.backEnd}</Title>
          <ContainerSkill>
            <SkillBar title={'SpringBoot'} percentage={90} text={HardSkills.springBoot}/>
            <SkillBar title={'Apache Kafka'} percentage={80} text={HardSkills.kafka}/>
            <SkillBar title={'Node'} percentage={80} text={HardSkills.node}/>
            <SkillBar title={'Python'} percentage={50} text={HardSkills.python}/>
            <SkillBar title={'AWS SNS/SQS'} percentage={30} text={HardSkills.awsSqsSns}/>
            <SkillBar title={'MongoDB'} percentage={70} text={HardSkills.mongoDb}/>
            <SkillBar title={'MySql'} percentage={60} text={HardSkills.mySql}/>
            <SkillBar title={'Redshift'} percentage={70} text={HardSkills.redshift}/>
            <SkillBar title={'PostgresSQL'} percentage={70} text={HardSkills.postgresSql}/>
            <SkillBar title={'Maven'} percentage={50} text={HardSkills.maven}/>
            <SkillBar title={'Gradle'} percentage={80} text={HardSkills.gradle}/>
            <SkillBar title={'Kubernetes'} percentage={70} text={HardSkills.kubernetes}/>
            <SkillBar title={'Docker'} percentage={80} text={HardSkills.docker}/>
            <SkillBar title={'Prometheus'} percentage={60} text={HardSkills.prometheus}/>
            <SkillBar title={'Grafana'} percentage={60} text={HardSkills.grafana}/>
            <SkillBar title={'Terraform'} percentage={30} text={HardSkills.terraForm}/>
            <SkillBar title={'Ansible'} percentage={30} text={HardSkills.ansible}/>
            <SkillBar title={'JUnit'} percentage={90} text={HardSkills.jUnit}/>
          </ContainerSkill>
        </ContainerBackSkill>
      </Container>
    </>
  );
};
