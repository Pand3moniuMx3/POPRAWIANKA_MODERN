import "../styles/Services.css";
import Badge from "./Badge";

const textTypes = [
  "artykuły",
  "wywiady",
  "felietony",
  "opowiadania",
  "wpisy na social media",
  "książki",
  "blogi",
];

export default function Services() {
  return (
    <section>
      <div className="container services">
        <h2>Usługi</h2>
        <div className="cards">
          <Card
            title="Redakcja merytoryczna"
            description="Poprawiam strukturę, treści i spójności książki. Redakcja obejmuje poprawę narracji, wzmocnienie argumentacji, zapewnienie logicznego układu oraz sugerowanie większych zmian."
          />
          <Card
            title="Redakcja językowa"
            description="Pilnuję gramatyki, interpunkcji, stylu i przejrzystości tekstu, przy jednoczesnym zachowaniu stylu autora. Wszystko z zachowaniem jednolitości tonu i formatowania."
          />
          <Card
            title="Korekta"
            description="W ostatnim etap przed publikacją, koncentruję się na drobnych błędach ortograficznych, interpunkcyjnych i składniowych, aby tekst był w pełni dopracowany."
          />
          <div className="text-types-card">
            <h3>Przyjmuję zlecenia na:</h3>
            <div className="text-types">
              {textTypes.map((textType) => (
                <Badge customClass="text-type" key={textType}>
                  {textType}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, description, children }) {
  return (
    <div className="card">
      <b>{title}</b>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
