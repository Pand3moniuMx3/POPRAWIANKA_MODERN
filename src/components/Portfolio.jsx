import "../styles/Portfolio.css";
import booksData from "../data/books.json";
import { useState } from "react";
import Badge from "./Badge";

export default function Portfolio() {
  const [selectedItem, setSelectedItem] = useState(0);

  return (
    <section>
      <div className="container portfolio">
        <Details item={booksData.at(selectedItem)} />
        <Controls
          booksData={booksData}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
        />
      </div>
    </section>
  );
}

function Details({ item }) {
  return (
    <div className="details">
      <figure>
        <img src={item.cover} alt={item.title} />
      </figure>
      <div className="info">
        <h2>Portfolio</h2>
        <div className="info-wrapper">
          <div className="cover-wrapper">
            <img src={item.cover} alt={item.title} />
          </div>
          <h3>{item.title}</h3>
          <div className="technical">
            <b>{item.author}</b>
            <Badge bcgColor="var(--clr-light)" color="var(--clr-main)">
              {item.type}
            </Badge>
          </div>
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

function Controls({ booksData, selectedItem, setSelectedItem }) {
  const firstPosition = 0;
  const lastPosition = booksData.length - 1;

  const [tempSelected, setTempSelected] = useState(0);

  function handleNextItem() {
    setSelectedItem((prev) =>
      prev === lastPosition ? firstPosition : prev + 1
    );
  }
  function handlePrevItem() {
    setSelectedItem((prev) =>
      prev === firstPosition ? lastPosition : prev - 1
    );
  }
  function handleClickIndicator(id) {
    setSelectedItem(id);
  }

  return (
    <div className="controls">
      <img
        src="/icons/prev-icon-brown.png"
        onClick={handlePrevItem}
        className="arrow"
      />
      <div className="indicators">
        {booksData.map((indicator) => (
          <Indicator
            id={indicator.id}
            key={indicator.id}
            selectedItem={selectedItem}
            onClick={handleClickIndicator}
            tempSelected={tempSelected}
            setTempSelected={setTempSelected}
          />
        ))}
      </div>
      <img
        src="/icons/next-icon-brown.png"
        onClick={handleNextItem}
        className="arrow"
      />
    </div>
  );
}

function Indicator({
  id,
  selectedItem,
  onClick,
  tempSelected,
  setTempSelected,
}) {
  return (
    <span
      className={
        tempSelected
          ? tempSelected === id
            ? "indicator active"
            : "indicator"
          : selectedItem === id
          ? "indicator active"
          : "indicator"
      }
      onClick={() => onClick(id)}
      onMouseEnter={() => setTempSelected(id)}
      onMouseLeave={() => setTempSelected(selectedItem)}
    />
  );
}
