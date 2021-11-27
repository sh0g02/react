import React, { useState } from "react";
import { FaStar } from 'react-icons/fa';

// StarコンポーネントにonSelectプロパティ追加
// f => fは、引数で受け取った関数をそのまま返す、ダミー関数
const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? 'red' : 'grey'} onClick={onSelect}/>
);

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  // ステートの初期値を受け取って、配列を返す関数
  // UseStateの返す関数には、1つ目は、ステート値, 2つ目はsetter
  // Returns a stateful value, and a function to update it.
  // hookは更新が起こると、hookされたコンポーネントを自動で再描画する
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {[...Array(totalStars)].map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
        />
      ))}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}
