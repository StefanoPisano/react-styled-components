import React, { useState } from 'react';
import styled from "styled-components";

import Button from '../../UI/Button/Button';

const FormControl = styled.div`
  margin: 0.5rem 0;

  & label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
  }

  & input {
    display: block;
    width: 100%;
    border: 1px solid #ccc;
    font: inherit;
    line-height: 1.5rem;
    padding: 0 0.25rem;
  }

  & input:focus {
    outline: none;
    background: #fad0ec;
    border-color: #8b005d;
  }

  &.invalid input {
    background-color: salmon;
  }

  &.invalid label {
    color: red;
  }
`

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);

  const goalInputChangeHandler = event => {

    if(enteredValue.trim().length) {
      setIsInputValid(true);
    }

    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = event => {
    event.preventDefault();

    if(enteredValue.trim().length) {
      props.onAddGoal(enteredValue);
    } else {
      setIsInputValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FormControl className={!isInputValid && 'invalid'}>
        <label>Course Goal</label>
        <input onChange={goalInputChangeHandler} />
      </FormControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
