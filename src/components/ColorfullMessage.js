import React from "react";

const ColorfullMessage = (props) => {
  // 分割代入
  const { color, children } = props;
  const contentStyle = {
    // 変数とプロパティが同じだと「color:」は不要で「color,」だけでも良い
    color: color,
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

export default ColorfullMessage;
