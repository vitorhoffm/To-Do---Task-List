import styled from 'styled-components';


export const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 0px 0px 8px 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;


export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  text-align: center;
`;


export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`;


export const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  background-color: #d9d9d9;
  border-radius: 8px;
  margin-bottom: 10px;
`;


export const TaskItemText = styled.div`
  flex-grow: 1;

  strong {
    display: block;
    font-size: 18px;
  }

  p {
    margin: 5px 0;
    color: #666;
  }
`;


export const Input = styled.input`
  display: block;
  width: calc(100% - 22px);
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;


export const Button = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  margin-top: 10px;
  border-radius: 4px;
  font-size: 16px;
  display: block;
  width: 100%;

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;


export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
`;


export const Icon = styled.span`
  font-size: 18px;
`;
