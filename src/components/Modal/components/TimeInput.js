import React, { forwardRef } from "react";

const TimeInput = forwardRef(({ error, value, onChange, ...props }, ref) => {
  return (
    <div className="input-field">
      <input
        type="time"
        ref={ref}
        value={value || ""}
        onChange={onChange}
        {...props}
        placeholder="10:00"
        required
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});

export default TimeInput;
