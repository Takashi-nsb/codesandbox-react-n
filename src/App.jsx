/*  */
import React, { useEffect, useState } from "react";
// [export default]だと、importへの指定文字は、本スクリプト内で使用する変数として扱われるが、
// [export const(defaultを使わない)]場合は、importするモジュール名である必要がある
import { ColorfullMessage } from "./components/ColorfullMessage";

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
  // useEffectの第２引数に設定した変数が変換したときのみ動作させたい場合、
  // useEffect{}内に実施したい処理を記載する
  // useEffect内で使用する変数は、第２引数に設定しないとESLintに注意されますが、無視しても問題ない
  // そのときに、ESLintの注意を無効化する方が良い。（ルールは、開発前にプロジェクトで決める必要がある）
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFlag || setfaceShowFlag(true);
      } else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

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
