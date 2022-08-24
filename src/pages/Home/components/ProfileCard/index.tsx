import { useEffect, useState } from "react";
import {
  FaBuilding,
  FaExternalLinkAlt,
  FaGithub,
  FaUserFriends
} from "react-icons/fa";

import { ProfileCardContainer, ProfileInfos } from "./styles";

import { api } from "../../../../lib/axios";

interface ProfileData {
  name: string;
  login: string;
  company: string;
  bio: string;
  followers: number;
  avatarUrl: string;
  htmlUrl: string;
}

function ProfileCard() {
  const [profileData, setProfileData] = useState<ProfileData>(
    {} as ProfileData
  );

  async function loadProfileData() {
    const response = await api.get("/users/caiovinicius7");

    const {
      name,
      login,
      company,
      bio,
      followers,
      avatar_url: avatarUrl,
      html_url: htmlUrl
    } = response.data;

    setProfileData({
      name,
      login,
      company,
      bio,
      followers,
      avatarUrl,
      htmlUrl
    });
  }

  useEffect(() => {
    loadProfileData();
  }, []);

  return (
    <ProfileCardContainer>
      <img src={profileData.avatarUrl} alt="user" />

      <ProfileInfos>
        <main>
          <header>
            <strong>{profileData.name}</strong>
            <a href={profileData.htmlUrl} target="_blank" rel="noreferrer">
              Github
              <FaExternalLinkAlt />
            </a>
          </header>

          <p> {profileData.bio} </p>
        </main>

        <footer>
          <span>
            <FaGithub color="#3A536B" />
            {profileData.login}
          </span>

          <span>
            <FaBuilding color="#3A536B" />
            {profileData.company}
          </span>

          <span>
            <FaUserFriends color="#3A536B" />
            {profileData.followers} seguidores
          </span>
        </footer>
      </ProfileInfos>
    </ProfileCardContainer>
  );
}

export { ProfileCard };
