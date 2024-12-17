import React, { forwardRef } from "react";

const DateInput = forwardRef(({ error, ...props }, ref) => (
  <div className="input-field">
    <input type="date" id="date" ref={ref} {...props} required />
    {error && <span className="error-text">{error}</span>}
  </div>
));

export default DateInput;
