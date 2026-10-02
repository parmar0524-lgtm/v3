 "use client";

import { useMemo, useState } from "react";
import { projects, sectors } from "../data/projects";

export default function ProjectGrid() {
  const [active, setActive] = useState("All");

  const visible = useMemo(
    () => active === "All" ? projects : projects.filter((project) => project.sector === active),
    [active]
  );

  return (
    <>
      <div className="filter-row" role="tablist" aria-label="Project sectors">
        {sectors.map((sector) => (
          <button
            key={sector}
            className={active === sector ? "filter active" : "filter"}
            onClick={() => setActive(sector)}
            role="tab"
            aria-selected={active === sector}
          >
            {sector}
          </button>
        ))}
      </div>

      <div className="project-grid">
        {visible.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-image" style={{ backgroundImage: `url(${project.image})` }} />
            <div className="project-body">
              <p className="project-sector">{project.sector}</p>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
