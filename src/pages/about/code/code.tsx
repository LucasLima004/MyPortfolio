import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";
import { TextDescription } from "./style";


interface AboutMe {
    user: string;
    function: string;
    current_education: string;
    hobbies: string[];
  }
  
  const aboutMe: AboutMe = {
    user: "Lucas Lima",
    function: "Full-stack junior dev and industrial automation technician",
    current_education: "Estácio, Udemy and Senai",
    hobbies: [
      "Studying",
      "Robotic",
      "Graphic design",
      "Cooking",
      "Games"
    ]
  };
  
  const getCurrentCity = (): string => {
    return "Recife - PE, Brazil";
  };
  

export const Code = () => { 
 const codeString = `
 const aboutMe = {
   user: "${aboutMe.user}",
   function: "${aboutMe.function}",
   current_education: "${aboutMe.current_education}",
   hobbies: [
     ${aboutMe.hobbies.map(hobby => `"${hobby}"`).join(",\n    ")}
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