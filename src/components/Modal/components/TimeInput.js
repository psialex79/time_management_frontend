import React, { forwardRef } from "react";

const TimeInput = forwardRef(({ error, ...props }, ref) => (
  <div className="input-field">
    <input type="time" id="time" ref={ref} {...props} required />
    {error && <span className="error-text">{error}</span>}
  </div>
));

export default TimeInput;
