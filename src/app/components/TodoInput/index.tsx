import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  display: flex;
  align-items: center;
  padding: 15px 25px;
  width: 100% auto;
  border-bottom: 1px solid #eee;
`;

const Input = styled.input`
  width: 100%;
  border: none;
  outline: 0;
`;

export default function TodoInput({
  setTodoList,
}: {
  setTodoList: (todo: ITodoItemContent) => void;
}) {
  const [content, setContent] = React.useState<string>('');
  return (
    <>
      <Box>
        <Input
          placeholder="할일을 입력해주세요"
          value={content}
          onChange={e => setContent(e.target.value)}
        />
      </Box>
    </>
  );
}
