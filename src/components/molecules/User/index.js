import { Profile, ProfileImage } from './styles'
import { SAVE_USERNAME_PATH } from 'services/constants'
import { Title } from 'components/atoms'

export const User = () => {
  return (
    <Profile>
      <ProfileImage
        className="profile-img"
        src="/images/profile.png"
        alt="Profile-Image"
      />
      <Title fontSize={22} mr={5}>
        {localStorage.getItem(SAVE_USERNAME_PATH)}
      </Title>
    </Profile>
  )
}
