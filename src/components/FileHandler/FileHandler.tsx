import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import dictionary from "../store/index";
import fileContentMatcher from "../../utils/fileContentMatcher";
import styled from "@emotion/styled";

const StyledFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;
const StyledParagraph = styled.p`
  margin: 15px 0;
  font-weight: bold;
  font-size: 18px;
`;
const StyledInput = styled.input`
  padding: 5px 10px;
  border-radius: 10px;
  outline: none;
  font-size: 18px;
  border: 3px solid #0ff;
`;
const StyledButton = styled.button`
  padding: 5px 20px;
  font-size: 20px;
  background: transparent;
  border: 3px solid #0ff;
  border-radius: 10px;
  cursor: pointer;
`;

const FileHandler = observer(() => {
  const [fileReader, setFileReader] = useState(new FileReader());
  const [matchRange, setMatchRange] = useState("");
  const [fileContent, setFileConent] = useState(Object);

  const handleJsonRead = () => {
    const content = fileReader.result;
    const newContent = content?.toString() || "";
    setFileConent(Object.keys(JSON.parse(newContent)).join(' '));
  };
  const handleTxtRead = () => {
    const content = fileReader.result;
    setFileConent(content)
    console.log(content);
  };
  const handleFileChosen = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.files?.length);

    if (!e.target.files?.length) {
      setFileConent("");
      return;
    }
    const file = e.target.files[0];

    if (file.type === "application/json") fileReader.onloadend = handleJsonRead;
    else fileReader.onloadend = handleTxtRead;

    fileReader.readAsText(file);
  };
  const handleMatchRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatchRange(e.target.value);
  };
  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    if (!matchRange) {
      e.preventDefault();
      alert("please write letter for matching in docs");
      dictionary.setShownRes(false);
      return;
    } else if (Object.keys(fileContent).length === 0) {
      e.preventDefault();
      alert("please upload file to be read");
      dictionary.setShownRes(false);
      return;
    }

    e.preventDefault();
    dictionary.setMatch(matchRange);
    dictionary.setWordsMatched(
      fileContentMatcher(fileContent, matchRange)
    );
    dictionary.setShownRes(true);
  };
  return (
    <StyledFormContainer>
      <h1>Letter matcher</h1>
      <form>
        <StyledParagraph>
          1)Choose file to be upload(only json format)
        </StyledParagraph>
        <label>
          <i
            style={{ fontSize: 40, cursor: "pointer", color: "#0ff" }}
            className="fas fa-file-upload"
          ></i>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={handleFileChosen}
            name="fileUploader"
          />
        </label>
        <StyledParagraph>2)Choose letter to match in your file</StyledParagraph>
        <StyledInput
          onChange={handleMatchRange}
          value={matchRange}
          type="text"
          name="textMatcher"
        />
        <StyledParagraph>
          3)Get your analytics by clicking on button
        </StyledParagraph>
        <StyledButton onClick={handleSubmit}>Match letter</StyledButton>
      </form>
    </StyledFormContainer>
  );
});
export default FileHandler;
