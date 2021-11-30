import { useState } from "react";

/**
 * stateの初期値を引数にとり、そのstateの値、イベントハンドラ、リセット関数を配列で返すカスタムフック
 * @param initialValue stateの初期値
 * @returns {[{onChange: (function(*): void), value: unknown}, (function(): void)]}
 */
export const useInput = initialValue => {
  const [value, setValue] = useState(initialValue); // stateの初期値を受け取って、配列を返す関数
  return [
    { value, onChange: e => setValue(e.target.value) },
    () => setValue(initialValue) // stateを初期値でリセットするための関数
  ];
}
