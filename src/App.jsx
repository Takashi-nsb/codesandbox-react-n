import React, { useEffect, useState } from "react";
import ColorfullMessage from "./components/ColorfullMessage";

const App = () => {
  // stateを変更すると、再レンダリングされる
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(true);

  const onClickButton = () => {
    setNum(num + 1);
  };
  const onClickButtonClear = () => {
    setNum(0);
  };

  const onClickSwitchShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  };

  // 最初の１回のみ実施したい場合、useEffectの第２引数は未設定とする
  useEffect(() => {
    console.log("useEffect");
  }, []);
  if (num > 0) {
    if (num % 3 === 0) {
      faceShowFlag || setfaceShowFlag(true);
    } else {
      faceShowFlag && setfaceShowFlag(false);
    }
  }

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちわ</h1>
      <ColorfullMessage color="blue">お元気ですか？</ColorfullMessage>
      <ColorfullMessage color="pink">元気です！</ColorfullMessage>
      <button onClick={onClickButton}>カウントアップ！</button>
      <button onClick={onClickButtonClear}>カウントクリア！</button>
      <p>{num}</p>
      <br />
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      {faceShowFlag && <p>＼(^o^)／</p>}
    </>
  );
};

export default App;
