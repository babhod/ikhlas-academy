import * as React from "react";

export function usePageAnimations() {
  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            const children = entry.target.querySelectorAll(".stagger-children > *");
            children.forEach((child, index) => {
              (child as HTMLElement).style.animationDelay = `${(index + 1) * 0.1}s`;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const triggers = document.querySelectorAll(".observe-trigger");
    triggers.forEach((trigger) => observer.observe(trigger));

    return () => {
      triggers.forEach((trigger) => observer.unobserve(trigger));
    };
  }, []);
}
