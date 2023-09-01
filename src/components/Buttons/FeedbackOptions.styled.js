import styled from 'styled-components';

export const ButtonsWrappper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const ButtonFeedback = styled.button`
  min-width: 100px;
  padding: 4px 10px;
  color: #fff;
  background-color: #eacda3;
background-image: linear-gradient(315deg, #eacda3 0%, #d6ae7b 74%);
border: none;
  border-radius: 15px;

  cursor: pointer;
  box-shadow: 2px -1px 5px -3px rgba(0, 0, 0, 0.75);
  font-size: 18px;
  text-align: center;
  text-transform: capitalize;
  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;