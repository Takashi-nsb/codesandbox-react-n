import React from "react";

export const ColorfullMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // 変数とプロパティが同じだと「color:」は不要で「color,」だけでも良い
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// 以下の記載方法の場合、import時に{}(分割代入)は、
// 以下の記述をせずに、モジュールに直接「export」を記載した場合、{}(分割代入)としなくてはならない
// default exportは、jsファイルに１つしか定義出来ない
//export default ColorfullMessage;
