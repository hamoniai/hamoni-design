// Message / comment role: a person or the AI participant in a run.
const MessageBubble = ({ role, name, time, children }) => {
  const isAI = role === 'ai';
  return (
    <div style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
      <span
        style={{
          flex: '0 0 auto', width: 32, height: 32, borderRadius: '50%',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 11, fontWeight: 600,
          background: isAI ? 'var(--brand-color-primary-bg)' : 'var(--brand-color-fill-secondary)',
          color: isAI ? 'var(--brand-color-primary-text)' : 'var(--brand-color-text-secondary)',
        }}
      >
        {isAI ? 'AI' : String(name).slice(0, 2).toUpperCase()}
      </span>
      <div style={{ minWidth: 0, flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, flexWrap: 'wrap' }}>
          <span style={{ fontWeight: 600, fontSize: 13, color: 'var(--brand-color-text)' }}>{name}</span>
          {isAI && (
            <span style={{
              fontSize: 10, textTransform: 'uppercase', letterSpacing: '.06em',
              color: 'var(--brand-color-primary-text)', background: 'var(--brand-color-primary-bg)',
              border: '1px solid var(--brand-color-primary-border)', borderRadius: 999, padding: '1px 6px',
            }}>Assistant</span>
          )}
          <span style={{ fontSize: 11, color: 'var(--brand-color-text-tertiary)' }}>{time}</span>
        </div>
        <div style={{
          marginTop: 6, fontSize: 13, lineHeight: 'var(--brand-line-height)',
          color: 'var(--brand-color-text-secondary)',
          background: isAI ? 'var(--brand-color-bg-elevated)' : 'transparent',
          border: isAI ? '1px solid var(--brand-color-border-secondary)' : '0',
          borderRadius: 8, padding: isAI ? '10px 12px' : '2px 0',
        }}>{children}</div>
      </div>
    </div>
  );
};
window.MessageBubble = MessageBubble;
