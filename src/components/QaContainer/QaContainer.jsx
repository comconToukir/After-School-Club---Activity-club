import { useEffect, useState } from "react";
import QandA from './../QandA/QandA';

const QaContainer = () => {
  const [qAndAList, setQAndAList] = useState([])
  useEffect(() => {
    fetch("qAndA.json")
    .then(res => res.json())
    .then(data => setQAndAList(data))
  }, [])
  return (
    <>
      {
        qAndAList.map((qAndA, i) => <QandA key={i} qAndA={qAndA} />)
      }
    </>
  );
};

export default QaContainer;