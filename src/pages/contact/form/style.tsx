import styled from 'styled-components';

export const Input = styled.input`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px; 
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
`;

export const TextArea = styled.textarea`
  margin: 15px 0;
  font-size: 16px;
  padding: 10px;
  width: 250px; 
  border-top: none;
  border-left: none;
  border-right: none;
  background: rgba(20, 20, 20, 0.2);
  color: white;
  outline: none;
`;

export const Button = styled.button`
  border: 1px solid rgba(10, 180, 180, 1);
  background: rgba(20, 20, 20, 0.6);
  font-size: 18px;
  color: white;
  margin-top: 20px;
  padding: 10px 50px;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    background: rgba(20, 20, 20, 0.8);
    padding: 10px 80px;
  }
`;