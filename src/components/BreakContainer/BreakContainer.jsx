import { useState, useEffect } from "react";
import Break from "../Break/Break";

const BreakContainer = () => {
  const [breaks, setBreaks] = useState([]);
  useEffect(() => {
    fetch("break.json")
      .then((res) => res.json())
      .then((data) => setBreaks(data));
  }, []);
  return (
    <div className="font-semibold mt-6">
      <h2 className="text-xl mb-2">Add A Breaktime</h2>
      <div className="flex justify-between">
        {breaks.map((br, i) => (
          <Break key={i} break={br} />
        ))}
      </div>
    </div>
  );
};

export default BreakContainer;
