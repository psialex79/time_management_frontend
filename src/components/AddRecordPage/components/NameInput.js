import React, { forwardRef } from "react";

const NameInput = forwardRef(({ error, ...props }, ref) => (
  <div className="input-field">
    <input
      type="text"
      id="name"
      ref={ref}
      {...props}
      placeholder="Контакт и комментарий."
      required
    />
    {error && <span className="error-text">{error}</span>}
  </div>
));

export default NameInput;
