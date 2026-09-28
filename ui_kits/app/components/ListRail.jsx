// List rail role: the queue of runs the team is working.
const ListRail = () => {
  const runs = [
    { name: 'Q3 invoice reconciliation', meta: 'Finance · 3 exceptions', active: true, dot: 'var(--brand-color-warning)' },
    { name: 'Onboard vendor — Northwind', meta: 'Operations · complete', dot: 'var(--brand-color-success)' },
    { name: 'Weekly access review', meta: 'Security · running', dot: 'var(--brand-color-primary)' },
    { name: 'Draft renewal notice', meta: 'Legal · needs input', dot: 'var(--brand-color-error)' },
    { name: 'Energy usage digest', meta: 'Utilities · scheduled', dot: 'var(--brand-color-text-tertiary)' },
  ];
  return (
    <aside data-od-id="run-list" style={{
      width: 288, flex: '0 0 auto', minHeight: 0, display: 'flex', flexDirection: 'column',
      borderRight: '1px solid var(--brand-color-border-secondary)', background: 'var(--brand-color-bg-container)',
    }}>
      <div style={{
        padding: '14px 16px', borderBottom: '1px solid var(--brand-color-border-secondary)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <strong style={{ fontSize: 13, color: 'var(--brand-color-text)' }}>Runs</strong>
        <button style={{
          height: 24, padding: '0 8px', border: '1px solid var(--brand-color-border)',
          borderRadius: 'var(--brand-border-radius-sm)', background: 'var(--brand-color-bg-container)',
          color: 'var(--brand-color-text-secondary)', font: 'inherit', fontSize: 12, cursor: 'pointer',
        }}>New</button>
      </div>
      <div style={{ overflowY: 'auto', minHeight: 0 }}>
        {runs.map((r, i) => (
          <button
            key={i}
            data-od-id={'run-item-' + i}
            style={{
              display: 'block', width: '100%', textAlign: 'left', padding: '12px 16px',
              border: 0, borderBottom: '1px solid var(--brand-color-border-secondary)',
              background: r.active ? 'var(--brand-color-primary-bg)' : 'transparent',
              color: 'inherit', font: 'inherit', cursor: 'pointer',
            }}
          >
            <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
              <span style={{ width: 7, height: 7, borderRadius: '50%', background: r.dot, flex: '0 0 auto' }}></span>
              <span style={{
                fontSize: 13, fontWeight: r.active ? 600 : 400, minWidth: 0,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
                color: 'var(--brand-color-text)',
              }}>{r.name}</span>
            </span>
            <span style={{ display: 'block', marginTop: 4, paddingLeft: 15, fontSize: 11, color: 'var(--brand-color-text-tertiary)' }}>{r.meta}</span>
          </button>
        ))}
      </div>
    </aside>
  );
};
window.ListRail = ListRail;
