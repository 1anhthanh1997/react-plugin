import React, { useEffect, useState } from "react";
// import './App.css';
import { getCardByParentIdApi } from "./bilingual-game/api/card_api";
// import MainBilingualGame from './bilingual-game/src/main_game';
// import TooltipView from './bilingual-game/src/game_component/tooltip/index';
import { CardModel } from "./share/model/card";
import { CARD_NORMAL, STATUS_PUBLIC } from "./share/constraint";
import { useDispatch } from "react-redux";
import { resetStateAction } from "./bilingual-game/redux/actions/bilingual_action";
import { POST_API } from "./bilingual-game/api";

function App({ jsData }) {
  // if (!jsData) {
  //   jsData = {
  //     elementId: 'root'
  //   }
  // }
  let dispatch = useDispatch();
  let [cardOption, setCardOption] = useState({
    cards: [],
    isLoading: true,
    showTooltip: true,
  });
  dispatch(resetStateAction());
  useEffect(() => {
    async function getCardData() {
      return await Promise.resolve(
        $.post(jsData.endpoint + "/get-cardd-by-ids", { ids: jsData.cardIds })
      );
    }
    async function xxx() {
      let data = await getCardData();
      let cards = [];
      data.map((e) => {
        let answer = e.backTexts;
        if (e.backText) {
          answer.push(e.backText);
        }
        let card = new CardModel({
          _id: e.id,
          parentId: e.parentId,
          hasChild: e.hasChild ?? CARD_NORMAL,
          question: {
            text: e.frontText,
            image: e.frontImage,
            sound: e.frontSound,
            hint: e.frontHint,
          },
          answer: {
            texts: answer,
            choices: e.multiChoices,
            image: e.backImage,
            sound: e.backSound,
            hint: e.backHint,
          },
          status: e.status ? e.status : STATUS_PUBLIC,
          lastUpdate: e.lastUpdate ? e.lastUpdate : 0,
          orderIndex: e.orderIndex ?? 0,
        });
        cards.push(card);
      });
      setCardOption({ cards: cards, isLoading: false, showTooltip: true });
    }
    xxx();
  }, []);
  return (
    <>
      {cardOption.showTooltip && (
        <TooltipView
          onCancel={() => setCardOption({ ...cardOption, showTooltip: false })}
        />
      )}
      {!cardOption.isLoading ? (
        <MainBilingualGame cards={cardOption.cards} jsData={jsData} />
      ) : (
        <div style={{ textAlign: "center", marginTop: "18px" }}>Loading...</div>
      )}
    </>
  );
}

export default App;
