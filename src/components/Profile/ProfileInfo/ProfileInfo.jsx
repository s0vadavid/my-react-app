import React from 'react';
import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div className={s.content}>
      <div className={s.descriptionBlock}>
        <img className={s.userPhoto} src={props.profile.photos.large !== null ? props.profile.photos.large : 'https://www.bautec-gmbh.com/upload/placeholder-m2_1636540211.jpg'} />
        ava + description
      </div>
    </div>
  )
}

export default ProfileInfo;