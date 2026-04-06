import { useEffect, useRef } from "react";
import "./VisitorCount.css";

const DIGITS = 5;

function VisitorCount() {
  const wrapRef = useRef(null);
  const targetRef = useRef(null);
  const animatedRef = useRef(false);

  function setOdometer(numStr) {
    const cells = document.querySelectorAll(".odo-body .digit-cell");
    const clean = String(numStr).replace(/\D/g, "");
    const padded = clean.padStart(DIGITS, "0");
    const digits = padded.slice(-DIGITS).split("");
    const firstNonZero = digits.findIndex(d => d !== "0");

    cells.forEach((cell, i) => {
      const span = cell.querySelector(".digit-inner");
      if (firstNonZero > 0 && i < firstNonZero) {
        cell.classList.add("digit-hidden");
        return;
      } else {
        cell.classList.remove("digit-hidden");
      }
      cell.classList.remove("rolling");
      void cell.offsetWidth;
      span.textContent = digits[i];
      cell.classList.add("rolling");
    });
  }

  function animateCount(target) {
    if (animatedRef.current) return; // only animate once
    animatedRef.current = true;

    const duration = 1800; // ms
    const steps = 30;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      // Ease-out curve: slow down near the end
      const progress = 1 - Math.pow(1 - step / steps, 3);
      const current = Math.round(progress * target);
      setOdometer(current);

      if (step >= steps) {
        clearInterval(timer);
        setOdometer(target); // ensure exact final value
      }
    }, interval);
  }

  useEffect(() => {
    let fetchedTarget = null;

    fetch("https://ayusht05.goatcounter.com/counter/TOTAL.json")
      .then((r) => r.json())
      .then((d) => {
        const count = parseInt(String(d.count || "0").replace(/\D/g, ""), 10);
        fetchedTarget = count;
        // If already visible when fetch completes, animate immediately
        if (animatedRef.current === "visible") {
          animateCount(count);
        }
      })
      .catch(() => {
        fetchedTarget = 0;
      });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          if (fetchedTarget !== null) {
            animateCount(fetchedTarget);
          } else {
            // Fetch not done yet, mark as visible so fetch callback animates
            animatedRef.current = "visible";
          }
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );

    if (wrapRef.current) observer.observe(wrapRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="odo-wrap" ref={wrapRef}>
      <div className="odo-label">· TOTAL INTERESTS ·</div>
      <div className="odo-body">
        {[...Array(DIGITS)].map((_, i) => (
          <div className="digit-cell" key={i}>
            <span className="digit-inner">0</span>
          </div>
        ))}
        <div className="odo-scanlines" />
        <div className="odo-gloss" />
      </div>
      <div className="odo-rivets">
        {[...Array(5)].map((_, i) => <div className="rivet" key={i} />)}
      </div>
    </div>
  );
}

export default VisitorCount;