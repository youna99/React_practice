import React, { useReducer } from "react";

// 데이터값
const contacts = [
  { id: 0, name: "Taylor", email: "taylor@mail.com" },
  { id: 1, name: "Alice", email: "alice@mail.com" },
  { id: 2, name: "Bob", email: "bob@mail.com" },
];

// 초기값
const initialState = {
  selectedId: 0,
  messages: {
    0: "Hello, Taylor",
    1: "Hello, Alice",
    2: "Hello, Bob",
  },
};

// reducer 함수 정의
const messengerReducer = (state, action) => {
  console.log("action >>>", action); // {type: 'changed_selection', contactId: 1}

  switch (action.type) {
    case "changed_selection": {
      return {
        ...state,
        selectedId: action.contactId,
      };
    }
    case "edited_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: action.messages,
        },
      };
    }
    case "sent_message": {
      return {
        ...state,
        messages: {
          ...state.messages,
          [state.selectedId]: "",
        },
      };
    }
    default: {
      throw Error(`Unknown action: ${action.type}`);
    }
  }
};

function SendMessage() {
  const [state, dispatch] = useReducer(messengerReducer, initialState);
  const message = state.messages[state.selectedId];
  const contact = contacts.find((c) => c.id === state.selectedId);

  // 액션 핸들러 함수 정의
  const changed = (id) =>
    dispatch({ type: "changed_selection", contactId: id });
  const edited = (e) => {
    dispatch({ type: "edited_message", message: e.target.value });
  };
  const sent = () => {
    alert(`Sending ${message} to ${contact.email}`);
    dispatch({ type: "sent_message" });
  };
  return (
    <>
      <section>
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id}>
              <button onClick={() => changed(contact.id)}>
                {initialState.selectedId === contact.id ? (
                  <b>{contact.name}</b>
                ) : (
                  contact.name
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <textarea
          value={message}
          placeholder={`Chat to ${contact.name}`}
          onChange={edited}
        ></textarea>
        <button onClick={sent}>Send to {contact.email}</button>
      </section>
    </>
  );
}

export default SendMessage;
