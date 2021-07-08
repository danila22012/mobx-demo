import styled from "@emotion/styled";
import { observer } from "mobx-react-lite";

import FileHandler from "../FileHandler/FileHandler";
import FileMatcher from "../FileMatcher/FileMatcher";
import dictionary from "../store/index";

const StyledAppContainer = styled.div`
  padding: 0;
  background: rgba(0, 0, 0, 0.5);
  height: 100vh;
  position: relative;
  font-family: Arial, Helvetica, sans-serif;
`;
const StyledAppContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border: 3px solid #ff0;
  max-width: 700px;
  margin: auto;
  border-radius: 20px;
  background: #fff;
  padding: 30px;
`;

const App = observer(() => {
  return (
    <StyledAppContainer className="App">
      <StyledAppContent>
        <FileHandler />
        {dictionary.isShownRes ? <FileMatcher /> : null}
      </StyledAppContent>
    </StyledAppContainer>
  );
}) 

export default App;
