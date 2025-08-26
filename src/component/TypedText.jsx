import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function TypedText({ strings }) {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings,
      typeSpeed: 60,
      backSpeed: 60,
      backDelay: 1000,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return (
    <span
      ref={el}
      className="text-3xl md:text-4xl font-bold text-indigo-400"
    ></span>
  );
}