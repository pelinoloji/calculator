import React from "react";

export default function numbers(props) {
  return (
    <div className="Items">
      <button className="Item" onClick={() => props.onClickNumbers("1")}>
        1
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("2")}>
        2
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("3")}>
        3
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("4")}>
        4
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("5")}>
        5
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("6")}>
        6
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("7")}>
        7
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("8")}>
        8
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("9")}>
        9
      </button>
      <button className="Item" onClick={() => props.onClickNumbers("0")}>
        0
      </button>
    </div>
  );
}
