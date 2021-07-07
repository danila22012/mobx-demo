import { observer } from "mobx-react-lite";
import React from "react";
import dictionary from "../store/index";
import styled from "@emotion/styled";
const StyledParagraph = styled.p`
  margin: 15px 0;
  font-size: 18px;
`;
const StyleSubTitle = styled.p`
  margin: 15px 0;
  font-size: 18px;
  font-weight: bold;
`;
const FileMatcher = observer(() => {
  return (
    <React.Fragment>
      <hr style={{ margin: "25px 0" }} />
      <h2 style={{ textAlign: "center" }}>Conclusion</h2>
      <div>
        <StyleSubTitle>In file you uloaded:</StyleSubTitle>
        <StyledParagraph>
          words with letter <b>{dictionary.toMatch}:</b>
          {dictionary.wordsMatched.allLettermatch}{" "}
        </StyledParagraph>
        <StyledParagraph>
          words starts with letter <b>{dictionary.toMatch}:</b>
          {dictionary.wordsMatched.firstLetterMAtch}{" "}
        </StyledParagraph>
        <StyledParagraph>
          words ends with letter <b>{dictionary.toMatch}:</b>
          {dictionary.wordsMatched.lastLetterMatch}{" "}
        </StyledParagraph>

        <StyledParagraph>
          {" "}
          words with letter <b>{dictionary.toMatch}</b> repeated in conjunction:
          {dictionary.wordsMatched.doubleLetterMatch}
        </StyledParagraph>
      </div>
    </React.Fragment>
  );
});
export default FileMatcher;
