import React, { useState } from "react";
import Accordion from "./Accordion";


function App() {
  const [active, setActive] = useState("");
  return (
    <div className="container">
      <h2 className="text-center mt-4 text-white">Sıkça Sorulan Sorular (SSS) </h2>
      <div className="row row-cols-md-2 my-3">
        <Accordion
          title="Collapsible 1"
          text="Anim pariatur life accusamus terry richardson ad squid. accusamus terry richardson ad squid.
          Vivamus sed egestas dolor. Praesent lacinia consectetur diam, eu finibus sem commodo a. Aliquam erat volutpat."
          act={active} setAct={setActive}
        />
        <Accordion
          title="Collapsible 2"
          text="reprehenderit, eiusmod high life, eiusmod life accusamus terry richardson ad eiusmod richardson.
          Curabitur ut dui lacinia, malesuada ligula eu, pellentesque orci. Praesent sit amet ante turpis. "
          act={active}
          setAct={setActive}
        />
        <Accordion
          title="Collapsible 3"
          text="eiusmod high life accusamus, squid eiusmod high life accusamus terry eiusmod high life accusamus.
          Cras dignissim libero blandit, egestas orci sed, congue erat. Pellentesque quis congue urna, non aliquet est."
          act={active} setAct={setActive}
        />
        <Accordion
          title="Collapsible 4"
          text="life accusamus terry richardson ad squid, eiusmod high life accusamus terry accusamus, squid eiusmod.
          Fusce eget metus consequat, tristique tortor nec, fringilla lorem. Fusce vestibulum elementum molestie."
          act={active} setAct={setActive}
        />
      </div>
    </div>
  );
}

export default App;
