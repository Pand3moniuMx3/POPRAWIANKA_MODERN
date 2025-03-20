import { useInput } from "../context/InputContext";
import Button from "./Button";
import "../styles/Contact.css";

export default function Contact() {
  const {
    name,
    surname,
    email,
    phoneNum,
    textType,
    textLength,
    emailCorrect,
    phoneNumCorrect,
    textLengthCorrect,
    setName,
    setSurname,
    setEmail,
    setPhoneNum,
    setTextType,
    setTextLength,
    emailIncorrect,
    sendSubmission,
  } = useInput();

  const filledOutCorrectly =
    name &&
    surname &&
    email &&
    phoneNum &&
    textType &&
    textLength &&
    emailCorrect &&
    phoneNumCorrect &&
    textLengthCorrect;

  return (
    <section>
      <div className="container contact">
        <h2>Kontakt</h2>
        <div className="contact-wrapper">
          <div className="col socials">
            <SocialIcon
              icon="/icons/linkedin-icon-brown.png"
              alt="linkedin"
              link="/"
            />
            <SocialIcon
              icon="/icons/facebook-icon-brown.png"
              alt="facebook"
              link="/"
            />
            <SocialIcon
              icon="/icons/gmail-icon-brown.png"
              alt="gmail"
              link="/"
            />
          </div>
          <form
            className="col form"
            action="https://api.web3forms.com/submit"
            method="POST"
          >
            <input
              type="hidden"
              name="access_key"
              value="922a6ff0-dbe3-4105-961a-f9988bccfb72"
            />
            <input
              className={name && "active"}
              type="text"
              placeholder="imię"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="imię"
            />
            <input
              className={surname && "active"}
              type="text"
              placeholder="nazwisko"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
              name="nazwisko"
            />
            <input
              className={`${!emailCorrect && "incorrect"} ${email && "active"}`}
              type="text"
              placeholder="twójemail@gmail.com"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                emailIncorrect(e.target.value);
              }}
              name="email"
            />
            <input
              className={`${!phoneNumCorrect && "incorrect"} ${
                phoneNum && "active"
              }`}
              type="text"
              placeholder="+48"
              value={phoneNum}
              onChange={(e) => setPhoneNum(e.target.value)}
              name="numer telefonu"
            />
            <input
              className={textType && "active"}
              type="text"
              placeholder="typ tekstu"
              value={textType}
              onChange={(e) => setTextType(e.target.value)}
              name="typ tekstu"
            />
            <input
              className={`${!textLengthCorrect && "incorrect"} ${
                textLength && "active"
              }`}
              type="text"
              placeholder="liczba znaków..."
              value={textLength}
              onChange={(e) => setTextLength(e.target.value)}
              name="liczba znaków"
            />
            <Button submit={true} disableCondition={!filledOutCorrectly}>
              Wyślij
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}

function SocialIcon({ icon, alt, link }) {
  return (
    <a className="social-icon" href={link}>
      <img src={icon} alt={alt} />
    </a>
  );
}
