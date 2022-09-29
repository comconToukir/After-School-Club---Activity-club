const QandA = ({ qAndA: { question, answer } }) => {
  return (
    <article className="p-4 shadow-sm mb-3">
      <h2 className="text-xl font-semibold">{question}</h2>
      <p className="text-gray-500 p-2">{answer}</p>
    </article>
  );
};

export default QandA;