import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const CounterPage = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    const request = async () => {
      const response = await axios.get('http://localhost:4000/todo');
      setData(response.data);
    };
    request();
  }, []);

  const plusOne = () => {
    setCount(count + 1);
  };

  const minusOne = () => {
    setCount((count) => count - 1);
  };

  const requestTodo = async () => {
    const response = await axios.get('http://localhost:4000/todo');
    setData(response.data);
  };

  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const sendTodo = async () => {
    const response = await axios.post('http://localhost:4000/todo', {
      id: 4,
      todo: value,
    });

    console.log(response);
  };

  return (
    <Container>
      <button onClick={plusOne}>+</button>
      <div>{count}</div>
      <button onClick={minusOne}>-</button>
      <button onClick={requestTodo}>요청하기</button>
      <div>
        {data.map((todo, i) => {
          return <div key={todo.id}>{todo.todo}</div>;
        })}
      </div>
      <div>
        <input type="text" onChange={changeValue} />
        <button onClick={sendTodo}>send</button>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  & > div {
    color: red;
    font-size: 30px;
  }

  & > button {
    margin: 0 30px;
    width: 100px;
    height: 100px;
    font-size: 80px;
  }
`;

export default CounterPage;
