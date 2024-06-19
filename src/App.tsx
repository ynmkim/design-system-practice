import { useState } from 'react';
import './App.css';
import Label from './components/Label';
import TextInput from './components/TextInput';

function App() {
  const [isError, setIsError] = useState(false);
  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsError((prev) => !prev);
  };

  return (
    <>
      <form className="flex flex-col gap-y-12">
        <div className="flex flex-col gap-y-2">
          <Label htmlFor="email">이메일</Label>
          <TextInput
            type="text"
            id="email"
            name="email"
            placeholder="이메일을 입력해 주세요."
            value=""
            onChange={() => {}}
            iconPath=""
            iconAlt=""
            onIconClick={() => {}}
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
            value=""
            onChange={() => {}}
            iconPath=""
            iconAlt=""
            onIconClick={() => {}}
            errorMessage="비밀번호를 입력해 주세요."
            isError={isError}
          />
        </div>

        <button onClick={onClickHandler}>제출</button>
      </form>
    </>
  );
}

export default App;
