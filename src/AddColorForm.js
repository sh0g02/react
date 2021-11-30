import React, {useRef} from "react";

/**
 * 制御されていないコンポーネントの例
 * @param onNewColor
 * @returns {JSX.Element}
 * @constructor
 */
// export default function AddColorForm({ onNewColor = f => f }) {
//   const txtTitle = useRef();
//   const hexColor = useRef();
//
//   const submit = e => {
//     e.preventDefault(); // HTMLデフォルトの挙動の防止
//     const title = txtTitle.current.value;
//     const color = hexColor.current.value;
//     onNewColor(title, color);
//     txtTitle.current.value = '';
//     hexColor.current.value = '';
//   };
//
//   return (
//     <form onSubmit={submit}>
//       <input ref={txtTitle} type="text" placeholder="color title..." required />
//       <input ref={hexColor} type="color" required />
//       <button>ADD</button>
//     </form>
//   );
// }

export default function AddColorForm({ onNewColor = f => f }) {
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("#000000");

  const submit = (e) => {
    e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor("");
  }

  return (
    <form onSubmit={submit}>
      <input
        value={title}
        onChange={event => setTitle(event.target.value)} // 入力値が更新される度にstateを更新 -> ユーザの入力とstateを同期する
        type="text"
        placeholder="color title..."
        required
      />
      <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
      />
      <button>ADD</button>
    </form>
  );
}
