import { HomeBanner, Avatar, Text, LinkSocial } from './styles';
import avatar from '../../../../assets/avatar.jpg';

export const Banner = () => {
  return (
    <HomeBanner>
      <Avatar src={avatar} alt="background-1" width="150px" height="150px" />
      <Text>Argentinian animator based in Buenos Aires.</Text>
      <Text>I love animation and music everyday, every minute, every second.</Text>
      <Text>
        Contact:
        <LinkSocial href="mailto:facundolopezanimation@gmail.com" target="_blank" rel="noreferrer">
          facundolopezanimation@gmail.com
        </LinkSocial>
      </Text>
    </HomeBanner>
  )
};
