import "./styles.css";
import { useState } from "react";

const faqs = [
  {
    id: 1,
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    id: 2,

    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    id: 3,
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  const [isOpenID, setIsOpenID] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq) => (
        <Accordion
          key={faq.id}
          number={faq.id}
          title={faq.title}
          content={faq.text}
          isOpenID={isOpenID}
          setIsOpenID={setIsOpenID}
        />
      ))}
    </div>
  );
}

function Accordion({ number, title, content, setIsOpenID, isOpenID }) {
  function toggleOpen(id) {
    console.log(id);
    if (isOpenID === id) {
      setIsOpenID(null);
    } else {
      setIsOpenID(id);
    }
  }
  return (
    <div
      onClick={() => toggleOpen(number)}
      className={`item ${isOpenID === number && "open"}`}
    >
      <h1 className="number">{number}</h1>
      <h1 className="title">{title}</h1>
      <div className="icon">{isOpenID === number ? "-" : "+"}</div>
      {isOpenID === number && (
        <div className="content-box">
          <p>{content}</p>
        </div>
      )}
    </div>
  );
}
