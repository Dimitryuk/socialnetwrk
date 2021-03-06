import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div>
        <img src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" />
      </div>

      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} />
        <div>{props.profile.fullName}</div>
        <div>{props.profile.contacts.instagram}</div>
        <div>{props.profile.lookingForAJob}</div>
        <div>{props.profile.aboutMe}</div>
      </div>
    </div>
  );
};

export default ProfileInfo;
