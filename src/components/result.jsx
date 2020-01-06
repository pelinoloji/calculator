import React from "react";

export default function result(props) {
  const detail = props.result
    ? props.result
    : props.first + props.operator + props.second;
  return (
    <div data-testid="result-component" className="Result">
      {detail}
    </div>
  );
}
