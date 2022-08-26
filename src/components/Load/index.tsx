// @ts-ignore
import MovingComponent from "react-moving-text";
import { SyncLoader } from "react-spinners";

import { SpinnerContainer } from "./styles";

function Load() {
  return (
    <SpinnerContainer>
      <SyncLoader color="#E7EDF4" speedMultiplier={0.75} />
      <MovingComponent
        type="typewriter"
        dataText={["Carregando...", "Por favor aguarde..."]}
      />
    </SpinnerContainer>
  );
}

export { Load };
