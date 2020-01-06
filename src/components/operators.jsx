import React from "react";

export default function operators(props) {
  return (
    <>
      <button
        className="Clear"
        disabled={props.isDisabled()}
        onClick={() => props.onClickOperator("clear")}
      >
        Clear
      </button>
      <div className="Items">
        <button
          className="Item"
          disabled={props.isDisabled()}
          onClick={() => props.onClickOperator("+")}
        >
          +
        </button>
        <button
          className="Item"
          disabled={props.isDisabled()}
          onClick={() => props.onClickOperator("-")}
        >
          -
        </button>
        <button
          className="Item"
          disabled={props.isDisabled()}
          onClick={() => props.onClickOperator("=")}
        >
          =
        </button>
      </div>
    </>
  );
}
