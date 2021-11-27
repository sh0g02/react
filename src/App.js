import StarRating from "./StarRating";

export default function App() {
  return (
    <StarRating style={{ backgroundColor: "lightblue" }} onDoubleClick={e => alert('doubleClick!!!')} />
  );
}
