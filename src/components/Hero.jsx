import "../styles/Hero.css";
import Button from "./Button";
import TiltedCard from "./TiltedCard";

export default function Hero() {
  return (
    <section>
      <div className="container hero">
        <div className="info">
          <h2>Redaktorka Anna Mirecka</h2>
          <p>
            Pisarze nie powinni się ograniczać - popuść wodze wyobraźni, a
            poprawność językową i merytoryczną zostaw mi.
          </p>
          <Button type="primary">Kontakt</Button>
        </div>
        <TiltedCard
          imageSrc="/images/ania-square.png"
          altText="Anna Mirecka - Twoja Redaktorka"
          captionText="Anna Mirecka - Twoja redaktorka"
          containerHeight="300px"
          containerWidth="300px"
          imageWidth="100%"
          rotateAmplitude={12}
          scaleOnHover={1.05}
          showMobileWarning={false}
          showTooltip={false}
          displayOverlayContent={true}
          overlayContent={<p className="name">Anna Mirecka</p>}
        />
      </div>
    </section>
  );
}
