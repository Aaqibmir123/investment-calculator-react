import React from "react";
const Userinput = ({onChange,Userinput}) => {  
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial investment</label>
          <input
            type="number"
            required
            value={Userinput.intialinvstment}
            onChange={(event) =>
              onChange("intialinvstment", event.target.value)
            }
          />
        </p>
        <p>
          <label>Annual investment</label>
          <input
            type="number"
            required
            value={Userinput.annualinvestemt}
            onChange={(event) =>
              onChange("annualinvestemt", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected return</label>
          <input type="number" required 
          value={Userinput.expecetdreturn}
          onChange={(event)=> onChange("expecetdreturn",event.target.value)}
          />
        </p>
        <p>
          <label>Duration</label>
          <input type="mumber" required value={Userinput.duration}
          onChange={(event)=> onChange("duration",event.target.value)}
          />
        </p>
      </div>
    </section>
  );
};

export default Userinput;
