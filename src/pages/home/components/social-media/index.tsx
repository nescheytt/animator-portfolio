import { BehanceOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

// styles
import { Component, Container, Title, Link } from './styles';

export const SocialMedia = () => {
  return (
    <Component>
      <Title>Follow us</Title>

      <Container>
        <Link href="https://www.behance.net/facundolopezart" target="_blank" rel="noreferrer">
          <BehanceOutlined style={{ fontSize: '62px' }} />
        </Link>

        <Link href="https://www.instagram.com/faculopez2d" target="_blank" rel="noreferrer">
          <InstagramOutlined style={{ fontSize: '48px' }} />
        </Link>

        <Link href="https://www.linkedin.com/in/facundolopezart/" target="_blank" rel="noreferrer">
          <LinkedinOutlined style={{ fontSize: '48px' }} />
        </Link>

        <Link href="mailto:facundolopezanimation@gmail.com" target="_blank" rel="noreferrer">
          <MailOutlined style={{ fontSize: '48px' }} />
        </Link>
      </Container>
    </Component>
  );
};
