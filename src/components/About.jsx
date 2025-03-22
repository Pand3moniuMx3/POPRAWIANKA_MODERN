import "../styles/About.css";
import { useState } from "react";

const tabContent = [
  {
    title: "O mnie",
    text: "Mam na imię Ania, i od zawsze jestem związana z książkami. Już jako małe dziecko wiedziałam, że książki będą bardzo ważną częścią mojego życia, również zawodowego. Wybór szkoły średniej, a potem kierunku studiów był kolejnym etapem do osiągnięcia tego celu - najpierw wyuczyłam się zawodu introligatora, a potem zdobyłam wykształcenie poligraficzne. Rok temu ukończyłam kurs redakcji merytorycznej i od tego czasu rozwijam swoje umiejętności dopieszczania tekstów i nadawania im poprawnej formy.",
  },
  {
    title: "Certyfikat",
    image: "/images/certyfikat.PNG",
  },
  {
    title: "Zawód",
    text: "Ukończenie studiów introligatorskich i poligraficznych otworzyło mi drzwi do pracy w wydawnictwach. Od ponad 20 lat dbam o to, żeby niezwykłe pomysły autorów przyjęły swój piękny, książkowy kształt",
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section>
      <div className="container about">
        <div className="col tabs">
          <Tab
            num={0}
            activeTab={activeTab}
            onClick={setActiveTab}
            icon="/icons/info-icon-brown.png"
            activeIcon="/icons/info-icon-white.png"
            alt="info o mnie"
          />
          <Tab
            num={1}
            activeTab={activeTab}
            onClick={setActiveTab}
            icon="/icons/uni-icon-brown.png"
            activeIcon="/icons/uni-icon-white.png"
            alt="info o mnie"
          />
          <Tab
            num={2}
            activeTab={activeTab}
            onClick={setActiveTab}
            icon="/icons/job-icon-brown.png"
            activeIcon="/icons/job-icon-white.png"
            alt="praca zawodowa"
          />
        </div>
        <TabContent item={tabContent.at(activeTab)} />
      </div>
    </section>
  );
}

function Tab({ num, activeTab, onClick, icon, activeIcon, alt }) {
  return (
    <div
      className={num === activeTab ? "tab active" : "tab"}
      onClick={() => onClick(num)}
    >
      {num === activeTab ? (
        <img className="icon" src={activeIcon} alt={alt} />
      ) : (
        <img className="icon" src={icon} alt={alt} />
      )}
    </div>
  );
}

function TabContent({ item }) {
  return (
    <div className="col tab-content">
      <h3>{item.title}</h3>
      {item.text && <p>{item.text}</p>}
      {item.image && <img src={item.image} alt="zdjęcie" />}
    </div>
  );
}
