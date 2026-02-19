import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { updateDeckCard } from "../store/cardsList/slice";
import { cardEmotes } from "../constant/arrayGame";
import Card from "../components/Card";

export default function GamePage() {
  const dispatch = useDispatch();

  const cardList = useSelector((state) => state.cardsList.list);

  useEffect(() => {
    dispatch(updateDeckCard(cardEmotes));
  }, [dispatch]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "12px",
          width: "88%",
        }}
      >
        {cardList.map((item) => {
          return <Card key={`card-${item.id}`} cardItem={item} />;
        })}
      </div>
    </div>
  );
}
