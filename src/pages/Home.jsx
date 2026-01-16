import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  useEffect(() => {
    if (count === 0) {
      navigate("/done");
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, navigate]);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>Countdown</h1>
      <h2>{count}</h2>
    </div>
  );
}
