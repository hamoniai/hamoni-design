// Chat / run area role: the working surface for one run.
const ChatArea = () => {
  const MessageBubble = window.MessageBubble;
  const InputBar = window.InputBar;

  const messages = [
    { role: 'human', name: 'Maya Okafor', time: '09:12', text: 'Q3 reconciliation is failing on three invoices — the matching rule flags them, but the amounts look correct.' },
    { role: 'ai', name: 'Hamoni Assistant', time: '09:12', text: 'I found the pattern: all three share a vendor-ID typo. I can normalise the IDs and re-run the match — about 80% should auto-resolve; the last case needs your call.' },
    { role: 'human', name: 'Daniel Reyes', time: '09:20', text: 'Go ahead with the normalisation. Leave the ambiguous one for me.' },
    { role: 'ai', name: 'Hamoni Assistant', time: '09:21', text: 'Done — 3 normalised, match re-run, 1 exception queued for review.' },
  ];

  return (
    <main data-od-id="run-area" style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', background: 'var(--brand-color-bg-layout)' }}>
      <header style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12,
        padding: '14px 20px', borderBottom: '1px solid var(--brand-color-border-secondary)',
        background: 'var(--brand-color-bg-container)',
      }}>
        <div style={{ minWidth: 0 }}>
          <h1 style={{ margin: 0, fontSize: 16, fontWeight: 600, color: 'var(--brand-color-text)' }}>Q3 invoice reconciliation</h1>
          <p style={{ margin: '2px 0 0', fontSize: 12, color: 'var(--brand-color-text-tertiary)' }}>Run #4821 · Finance · started 09:10</p>
        </div>
        <span style={{
          flex: '0 0 auto', fontSize: 12, color: 'var(--brand-color-primary-text)',
          background: 'var(--brand-color-primary-bg)', border: '1px solid var(--brand-color-primary-border)',
          borderRadius: 999, padding: '3px 10px',
        }}>In progress</span>
      </header>

      <div style={{ flex: 1, overflowY: 'auto', padding: 20, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {messages.map((m, i) => (
          <MessageBubble key={i} role={m.role} name={m.name} time={m.time}>{m.text}</MessageBubble>
        ))}
      </div>

      <div style={{ padding: '12px 20px 20px' }}>
        <InputBar />
      </div>
    </main>
  );
};
window.ChatArea = ChatArea;
