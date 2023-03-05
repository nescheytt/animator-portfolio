import { BehanceOutlined, InstagramOutlined, LinkedinOutlined, MailOutlined } from '@ant-design/icons';

// styles
import { Component, Container, LinkSocial } from './styles';

export const SocialMedia = () => {
  return (
    <Component>
      <h2>FOLLOW US</h2>

      <Container>
        <LinkSocial href="https://www.behance.net/facundolopezart" target="_blank" rel="noreferrer">
          <BehanceOutlined style={{ fontSize: '62px' }} />
        </LinkSocial>

        <LinkSocial href="https://www.instagram.com/faculopez2d" target="_blank" rel="noreferrer">
          <InstagramOutlined style={{ fontSize: '48px' }} />
        </LinkSocial>

        <LinkSocial href="https://www.linkedin.com/in/facundolopezart/" target="_blank" rel="noreferrer">
          <LinkedinOutlined style={{ fontSize: '48px' }} />
        </LinkSocial>

        <LinkSocial href="mailto:facundolopezanimation@gmail.com" target="_blank" rel="noreferrer">
          <MailOutlined style={{ fontSize: '48px' }} />
        </LinkSocial>
      </Container>
    </Component>
  )
}