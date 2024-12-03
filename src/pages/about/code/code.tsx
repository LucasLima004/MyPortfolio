import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TextDescription } from "./style";
import { AboutMeCode, getCurrentCity } from "../../../utils/Messages";

export const Code = () => {
  const codeString = `
    const aboutMe = {
      user: "${AboutMeCode.user}",
      function: "${AboutMeCode.function}",
      current_education: "${AboutMeCode.current_education}",
      hobbies: [
        ${AboutMeCode.hobbies.map(hobby => `"${hobby}"`).join(",\n    ")}
      ]
    };
  
    function getCurrentCity() {
      return "${getCurrentCity()}";
    }
 `;

  return (
    <TextDescription>
      <SyntaxHighlighter language="javascript" style={dracula}>
        {codeString}
      </SyntaxHighlighter>
    </TextDescription>
  );
}