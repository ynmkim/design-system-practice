import { useState } from 'react';
import './App.css';
import Label from './components/Label';
import TextInput from './components/TextInput';
import ChipList from './components/ChipList';
import ActionButton from './components/ActionButton';

function App() {
  const [isError, setIsError] = useState(false);
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsError((prev) => !prev);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const onIconClickHandler = () => {
    setValues({
      email: '',
      password: '',
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-y-12" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">이메일</Label>
          <TextInput
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            value={values.email}
            onChange={onChangeHandler}
            iconPath="/icons/ic-cancel-white.svg"
            iconAlt="취소"
            onIconClick={onIconClickHandler}
            errorMessage="이메일을 입력해 주세요."
            isError={isError}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="비밀번호">비밀번호</Label>
          <TextInput
            type="text"
            id="password"
            name="password"
            placeholder="비밀번호를 입력해 주세요."
            value={values.password}
            onChange={onChangeHandler}
            iconPath="/icons/ic-cancel-white.svg"
            iconAlt="취소"
            onIconClick={onIconClickHandler}
            errorMessage="비밀번호를 입력해 주세요."
            isError={isError}
          />
        </div>
        <ActionButton
          type="submit"
          appreance="contained"
          isDisabled={false}
          onClick={() => {}}
        >
          제출
        </ActionButton>
      </form>
      <br />
      <ChipList
        chipList={['고양이', '강아지', '용', '토끼']}
        appreance="contained"
        size="medium"
        onClick={() => {
          console.log('hello');
        }}
      />
    </div>
  );
}

export default App;
