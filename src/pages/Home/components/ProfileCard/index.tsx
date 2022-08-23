import {
  FaExternalLinkAlt,
  FaGithub,
  FaBuilding,
  FaUserFriends
} from "react-icons/fa";

import { ProfileCardContainer, ProfileInfos } from "./styles";

function ProfileCard() {
  return (
    <ProfileCardContainer>
      <img src="https://github.com/caiovinicius7.png" alt="user" />

      <ProfileInfos>
        <main>
          <header>
            <strong>Caio Vinícius</strong>
            <a
              href="https://github.com/caiovinicius7"
              target="_blank"
              rel="noreferrer"
            >
              Github
              <FaExternalLinkAlt />
            </a>
          </header>

          <p>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </p>
        </main>

        <footer>
          <span>
            <FaGithub color="#3A536B" />
            caioVinicius7
          </span>

          <span>
            <FaBuilding color="#3A536B" />
            Zenvia
          </span>

          <span>
            <FaUserFriends color="#3A536B" />
            10 seguidores
          </span>
        </footer>
      </ProfileInfos>
    </ProfileCardContainer>
  );
}

export { ProfileCard };
