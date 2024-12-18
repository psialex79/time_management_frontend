import React, { forwardRef } from "react";

const NameInput = forwardRef(({ error, ...props }, ref) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  return (
    <div className="input-field">
      <input
        type="text"
        id="name"
        ref={ref}
        {...props}
        placeholder="Контакт и комментарий."
        required
        onKeyDown={handleKeyDown}
      />
      {error && <span className="error-text">{error}</span>}
    </div>
  );
});
