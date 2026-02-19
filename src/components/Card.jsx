export default function Card({ cardItem }) {
  console.log(cardItem);

  return (
    <div
      style={{
        backgroundColor: "#000000",
        width: "150px",
        height: "200px",
        border: "1px solid #ffffff",
        borderRadius: "6px",
      }}
    ></div>
  );
}
