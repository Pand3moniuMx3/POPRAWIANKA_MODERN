import "../styles/Reviews.css";
import { useEffect, useRef, useState } from "react";
import Badge from "./Badge";

const reviews = [
  {
    stars: 5,
    author: "Jarosław Olejniczak",
    project: "Prawdziwa historia motocykli Indian - Pasja",
    text: "Współpraca z Anią była dla mnie szczególnie ważna bo dotyczyła mojej pierwszej książki. Ania swym profesjonalnym podejściem zmieniła ją i ukształtowała tak by była jeszcze lepsza. Zrobiła to Super! Szanuję w niej podejście do sprawy, pełne zaangażowanie, szczegółowość, skupienie i oddanie by jej praca była w konsekwencji była nieoceniona. Jeszcze raz bardzo za wszystko dziekuję Aniu i życzę dalszych sukcesów i dobrej energii, którą posiadasz! Wiem, że wiele zdziałasz. Uściski!",
  },
  {
    stars: 5,
    author: "Mariusz Mirecki",
    project: "The Blue Tree",
    text: "Mam przyjemność polecić Annę jako edytorkę i korektorkę tekstów. Współpracuję z nią regularnie, gdy potrzebuję pewności, że tekst jest napisany poprawnie i precyzyjnie po polsku. Ania to osoba niezwykle rzetelna i godna zaufania – zawsze można na niej polegać. Jej imponująca znajomość języka polskiego sprawia, że doskonale radzi sobie z każdym tekstem, niezależnie od jego tematyki czy stylu. Wydaje się, że zna wszystkie słowa, a jednocześnie ma wyjątkowe wyczucie tonu i nastroju tekstu, który edytuje. Potrafi wprowadzać poprawki tak, by nie tylko poprawić język, ale też wzmocnić przekaz i styl autora. Dodatkowym atutem Ani jest jej profesjonalne podejście do współpracy. Umiejętnie przyjmuje uwagi i pracuje zgodnie z wytycznymi, dbając o to, by efekt końcowy spełniał wszystkie oczekiwania. To osoba skrupulatna, dokładna i niezwykle kompetentna. Z pełnym przekonaniem polecam współpracę z Anią każdemu, kto szuka doświadczonej edytorki i korektorki tekstów.",
  },
  {
    stars: 5,
    author: "Tomasz Kaczmarek",
    project: "Alchemia Światła",
    text: "Ania jest bezapelacyjnie najlepszą beta readerką z jaką miałem okazję współpracować. Bardzo mi pomogła przy wielu opowiadaniach i dwóch powieściach. Jej uwagi były zawsze celne i przejrzyście wyłożone. Dzięki jej zaangażowaniu i wsparciu każdy z moich tekstów bardzo zyskał na wartości i stał się ciekawszy dla czytelników. Bardzo polecam ją każdemu, kto chciałby aby jego tekst był dokładnie przeczytany i sprawdzony, a także otrzymać zestaw wartościowych uwag i komentarzy.",
  },
];

export default function Reviews() {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const sliderRef = useRef(null);
  const sliderLength = reviews.length;
  const slidesVisible = screenWidth > 700 ? 2 : 1;
  const sliderFirstPosition = 0;
  const sliderLastPosition = reviews.length - 1;
  const indicatorTrackLength = 200;
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const updateSliderWidth = () => {
      const slider = document.querySelector(".slider");
      if (slider) {
        document.documentElement.style.setProperty(
          "--slider-width",
          `${slider.offsetWidth}px`
        );
      }
    };

    updateSliderWidth();
    window.addEventListener("resize", updateSliderWidth);

    return () => {
      window.removeEventListener("resize", updateSliderWidth);
    };
  }, []);

  const updateScreenWidth = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", updateScreenWidth);
    return () => window.removeEventListener("resize", updateScreenWidth);
  }, []);

  function handleSlideNext() {
    const sliderComponent = sliderRef.current;
    if (!sliderComponent) return;

    const reviewComponent = sliderComponent.querySelector(".review");
    if (!reviewComponent) return;

    const reviewWidth = reviewComponent.offsetWidth;

    sliderComponent.scrollBy({
      left: reviewWidth,
      behavior: "smooth",
    });

    setCurrentIndex((prev) =>
      screenWidth > 700
        ? prev === sliderLastPosition - 1
          ? prev
          : prev + 1
        : prev === sliderLastPosition
        ? prev
        : prev + 1
    );
  }

  function handleSlidePrev() {
    const sliderComponent = sliderRef.current;
    if (!sliderComponent) return;

    const reviewComponent = sliderComponent.querySelector(".review");
    if (!reviewComponent) return;

    const reviewWidth = reviewComponent.offsetWidth;

    sliderComponent.scrollBy({
      left: -reviewWidth,
      behavior: "smooth",
    });

    setCurrentIndex((prev) => (prev === sliderFirstPosition ? prev : prev - 1));
  }

  // indicator on mobile
  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let startX = 0;
    let endX = 0;

    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      endX = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const deltaX = startX - endX;
      const threshold = 50; // Minimum swipe distance to trigger action

      if (deltaX > threshold) {
        handleSlideNext();
      } else if (deltaX < -threshold) {
        handleSlidePrev();
      }
    };

    slider.addEventListener("touchstart", handleTouchStart);
    slider.addEventListener("touchmove", handleTouchMove);
    slider.addEventListener("touchend", handleTouchEnd);

    return () => {
      slider.removeEventListener("touchstart", handleTouchStart);
      slider.removeEventListener("touchmove", handleTouchMove);
      slider.removeEventListener("touchend", handleTouchEnd);
    };
  }, []);

  return (
    <section>
      <div className="container reviews">
        <h2>Co mówią klienci?</h2>
        <div className="slider" ref={sliderRef}>
          {reviews.map((review) => (
            <Review
              key={review.project}
              stars={review.stars}
              author={review.author}
              project={review.project}
              text={review.text}
            />
          ))}
        </div>
        <div className="controls">
          <img
            src="/icons/prev-icon-black.png"
            alt="slide left"
            onClick={handleSlidePrev}
          />
          <div className="indicator-track">
            <div
              className="indicator-thumb"
              style={{
                width: `${
                  indicatorTrackLength / (sliderLength / slidesVisible)
                }px`,
                transform: `translateX(${
                  currentIndex * (indicatorTrackLength / sliderLength)
                }px)`,
              }}
            />
          </div>
          <img
            src="/icons/next-icon-black.png"
            alt="slide right"
            onClick={handleSlideNext}
          />
        </div>
      </div>
    </section>
  );
}

function Review({ stars = 0, author, project, text }) {
  return (
    <div className="review">
      <div className="stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} full={stars >= i + 1} />
        ))}
      </div>
      <b>{author}</b>
      <Badge customClass="proj-title">{project}</Badge>
      <p>{text}</p>
    </div>
  );
}

function Star({ full }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Mid Star Icon" clip-path="url(#clip0_333_2)">
        <path
          id="StarIcon"
          d="M7.52447 1.46352C7.67415 1.00287 8.32585 1.00287 8.47553 1.46353L9.79611 5.52786C9.86305 5.73388 10.055 5.87336 10.2716 5.87336L14.5451 5.87336C15.0295 5.87336 15.2309 6.49316 14.839 6.77786L11.3817 9.28976C11.2065 9.41709 11.1331 9.64277 11.2001 9.84878L12.5206 13.9131C12.6703 14.3738 12.1431 14.7568 11.7512 14.4721L8.29389 11.9602C8.11865 11.8329 7.88135 11.8329 7.70611 11.9602L4.24877 14.4721C3.85692 14.7568 3.32968 14.3738 3.47935 13.9131L4.79994 9.84878C4.86687 9.64277 4.79355 9.41709 4.6183 9.28976L1.16097 6.77786C0.769111 6.49316 0.970499 5.87336 1.45486 5.87336L5.72836 5.87336C5.94497 5.87336 6.13695 5.73388 6.20389 5.52786L7.52447 1.46352Z"
          stroke="#212529"
          stroke-linejoin="round"
          fill={full ? "#212529" : ""}
        />
      </g>
      <defs>
        <clipPath id="clip0_333_2">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
