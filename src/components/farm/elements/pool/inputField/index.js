import React from "react";

export const InputField = ({
  title,
  current,
  unit,
  onMax,
  onAction,
  value,
  onChange,
  buttonTitle,
  isConnected,
  subtitle,
}) => (
  <form onSubmit={(e) => e.preventDefault()} className="input-field">
    <div className="input-label">
      <span>{`${title}:`}</span>
      {` ${current !== null ? current : "-"} ${unit}`}
    </div>
    <div className="input-container">
      <button className="max-btn" onClick={onMax} disabled={!isConnected}>
        Max
      </button>
      <div className="input">
        <input
          type="number"
          value={value}
          step={0.001}
          onChange={onChange}
          disabled={!isConnected}
        />
      </div>
    </div>
    {subtitle !== null && <div className="input-subtitle">{subtitle}</div>}
    <button
      className="action-btn"
      onClick={onAction}
      disabled={!isConnected}
    >{`${buttonTitle} ${unit}`}</button>
  </form>
);
