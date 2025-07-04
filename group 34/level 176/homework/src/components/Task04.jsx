import { useEffect, useRef, useState } from "react";

export default function Task04() {
  const [value, setValue] = useState("");
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.log("Value updated:", value);
  }, [value]);

  return (
    <div className="border rounded-[20px] p-[20px]">
        <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Type something"
            className="border rounded-[5px]"
        />
    </div>
  );
}
// თითოეულ input-ზე console-ში გამოდის ის მონაცემი(value)