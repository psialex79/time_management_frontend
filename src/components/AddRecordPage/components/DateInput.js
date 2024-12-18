import React, { forwardRef } from "react";

const DateInput = forwardRef(({ error, value, onChange, ...props }, ref) => {
  return (
    <div className="input-field">
      <input
        type="date"
        ref={ref}
        value={value || ""}
        onChange={onChange}
        {...props}
        placeholder="29 фев. 2028 г."
        required
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

export default DateInput;
