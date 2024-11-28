import { ReactNode, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: ReactNode;
}

const Portal: React.FC<PortalProps> = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const el = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    el.current = document.createElement("div");
    const portalRoot = document.getElementById("portal-root");

    if (portalRoot && el.current) {
      portalRoot.appendChild(el.current);
      setMounted(true);
    }

    return () => {
      if (portalRoot && el.current) {
        portalRoot.removeChild(el.current);
      }
    };
  }, []);

  return mounted && el.current ? createPortal(children, el.current) : null;
};

export default Portal;
