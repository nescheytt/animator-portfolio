// styles
import { Component, Title, Image, Description, Paragraph } from './styles';

// images
import perfil from '../../../../assets/perfil.webp';

export const About = () => {
  return (
    <Component>
      <Title>About me</Title>

      <Description>
        <Image src={perfil} alt="foto-perfil" />

        <Paragraph>
          Lionel Andrés Messi, born 24 June 1987, also known as Leo Messi, is an Argentine professional footballer who plays as a forward for Ligue 1 club Paris Saint-Germain and captains the Argentina national team.
        </Paragraph>
      </Description>
    </Component>
  );
};
