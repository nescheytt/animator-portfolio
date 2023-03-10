// styles
import { Component, Title, Image, Description, Paragraph } from './styles';

// images
import perfil from '../../../../assets/perfil.jpeg';

export const About = () => {
  return (
    <Component>
      <Title>About me</Title>

      <Description>
        <Image src={perfil} alt="foto-perfil" />

        <Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Malesuada fames ac turpis egestas maecenas pharetra convallis posuere.
        </Paragraph>
      </Description>
    </Component>
  );
};
