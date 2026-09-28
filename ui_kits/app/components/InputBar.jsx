// Composer role: add a comment or ask the AI participant.
const InputBar = () => {
  const { useState } = React;
  const [value, setValue] = useState('');
  return (
    <div
      data-od-id="composer"
      style={{
        display: 'flex', gap: 8, alignItems: 'flex-end', padding: 12,
        border: '1px solid var(--brand-color-border-secondary)', borderRadius: 10,
        background: 'var(--brand-color-bg-container)',
      }}
    >
      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Add a comment or ask the assistant…"
        rows={1}
        aria-label="Composer"
        style={{
          flex: 1, minWidth: 0, resize: 'vertical', minHeight: 36, maxHeight: 120,
          border: 0, outline: 'none', background: 'transparent',
          color: 'var(--brand-color-text)', font: 'inherit', fontSize: 13, lineHeight: 1.5,
        }}
      />
      <button
        data-od-id="composer-send"
        style={{
          flex: '0 0 auto', height: 'var(--brand-control-height)', padding: '0 var(--brand-size)',
          border: '1px solid var(--brand-color-primary)', borderRadius: 'var(--brand-border-radius)',
          background: 'var(--brand-color-primary)', color: 'var(--brand-color-text)',
          font: 'inherit', fontWeight: 600, fontSize: 13, cursor: 'pointer',
        }}
      >Send</button>
    </div>
  );
};
window.InputBar = InputBar;
