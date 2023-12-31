import "./styles/QuoteBox.css";

const QuoteBox = ({ quote, handleChangeQuote }) => {
  const { phrase, author } = quote;

  return (
    <article className="quotebox">
      <h1 className="quotebox__title">INFOGALAZ</h1>
      <div className="quotebox__box">
        <p>{phrase}</p>
      </div>
      <button className="quotebox__btn" onClick={handleChangeQuote}>
        <img src="/boton.svg" alt="" />
      </button>
      <span className="quotebox__author">{author}</span>
      <img className="quotebox__img" src="../images/planet1.svg" alt="" />
    </article>
  );
};
export default QuoteBox;
