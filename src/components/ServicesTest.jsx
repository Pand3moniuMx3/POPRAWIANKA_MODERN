import "../styles/Services.css";
import Carousel from "./Carousel";

const textTypes = [
  "artykuły",
  "wywiady",
  "felietony",
  "opowiadania",
  "wpisy na social media",
  "książki",
  "blogi",
];

export default function ServicesTest() {
  return (
    <section>
      <div className="container services-test">
        <Carousel
          baseWidth={500}
          autoplay={true}
          autoplayDelay={3000}
          loop={true}
          round={false}
        />
        <div className="text-types">
          {textTypes.map((textType) => (
            <p className="text-type">{textType}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
