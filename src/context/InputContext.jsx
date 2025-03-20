import { createContext, useContext, useReducer } from "react";

const InputContext = createContext();

const initialState = {
  name: "",
  surname: "",
  email: "",
  emailCorrect: true,
  phoneNum: "",
  phoneNumCorrect: true,
  textType: "",
  textLength: "",
  textLengthCorrect: true,
};

function reducer(state, action) {
  switch (action.type) {
    case "set/name":
      return {
        ...state,
        name: action.payload,
      };
    case "set/surname":
      return {
        ...state,
        surname: action.payload,
      };
    case "set/email":
      return {
        ...state,
        email: action.payload,
      };
    case "set/phoneNum":
      return {
        ...state,
        phoneNum: Number(action.payload),
      };
    case "set/textType":
      return {
        ...state,
        textType: action.payload,
      };
    case "set/textLength":
      return {
        ...state,
        textLength: Number(action.payload),
      };
    case "set/emailCorrect":
      return {
        ...state,
        emailCorrect: action.payload,
      };
    case "incorrect/phoneNum":
      return {
        ...state,
        phoneNumCorrect: false,
      };
    case "incorrect/textLength":
      return {
        ...state,
        textLengthCorrect: false,
      };
    default:
      throw new Error("action unknown");
  }
}

function InputProvider({ children }) {
  const [
    {
      name,
      surname,
      email,
      phoneNum,
      textType,
      textLength,
      emailCorrect,
      phoneNumCorrect,
      textLengthCorrect,
    },
    dispatch,
  ] = useReducer(reducer, initialState);

  const setName = (name) => {
    dispatch({ type: "set/name", payload: name });
  };

  const setSurname = (surname) => {
    dispatch({ type: "set/surname", payload: surname });
  };

  const setEmail = (email) => {
    dispatch({ type: "set/email", payload: email });
  };
  const emailIncorrect = (email) => {
    if (!email) {
      dispatch({ type: "set/emailCorrect", payload: true });
      return;
    }
    if (!email.includes("@")) {
      dispatch({ type: "set/emailCorrect", payload: false });
      return;
    }
    dispatch({ type: "set/emailCorrect", payload: true });
  };

  const setPhoneNum = (phoneNum) => {
    if (isNaN(phoneNum)) {
      dispatch({ type: "incorrect/phoneNum" });
      return;
    }
    dispatch({ type: "set/phoneNum", payload: phoneNum });
  };

  const setTextType = (textType) => {
    dispatch({ type: "set/textType", payload: textType });
  };

  const setTextLength = (num) => {
    if (isNaN(num)) {
      dispatch({ type: "incorrect/textLength" });
      return;
    }
    dispatch({ type: "set/textLength", payload: num });
  };

  return (
    <InputContext.Provider
      value={{
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
      }}
    >
      {children}
    </InputContext.Provider>
  );
}

function useInput() {
  const context = useContext(InputContext);
  if (context === undefined)
    throw new Error("useInput used outside of InputProvider");
  return context;
}

export { InputProvider, useInput };
