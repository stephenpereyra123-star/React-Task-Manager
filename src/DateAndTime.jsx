import { useState, useEffect } from "react";

export default function DateAndTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-10">
      <p className="information-widgets">{time.toLocaleDateString()}</p>
      <p className="information-widgets">{time.toLocaleTimeString()}</p>
    </div>
  );
}
