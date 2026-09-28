// Navigation role: the app shell sidebar.
const Sidebar = ({ dark, onToggleDark }) => {
  const nav = ['Home', 'Runs', 'Workflows', 'People', 'Insights'];
  const active = 'Runs';
  return (
    <nav data-od-id="sidebar" style={{
      width: 216, flex: '0 0 auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 6,
      borderRight: '1px solid var(--brand-color-border-secondary)', background: 'var(--brand-color-bg-container)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
        <span style={{
          width: 34, height: 34, borderRadius: 9, background: '#FBF6FF',
          border: '1px solid var(--brand-color-border-secondary)',
          display: 'inline-flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
        }}>
          <img src="../../assets/Logo-notext_transparent.svg" alt="Hamoni" style={{ width: 22, height: 22 }} />
        </span>
        <strong style={{ fontSize: 15, color: 'var(--brand-color-text)' }}>Hamoni</strong>
      </div>

      {nav.map((item) => (
        <a
          key={item}
          href="#"
          data-od-id={'nav-' + item.toLowerCase()}
          style={{
            display: 'flex', alignItems: 'center', height: 36, padding: '0 10px', borderRadius: 8,
            textDecoration: 'none', fontSize: 13,
            fontWeight: item === active ? 600 : 400,
            color: item === active ? 'var(--brand-color-primary-text)' : 'var(--brand-color-text-secondary)',
            background: item === active ? 'var(--brand-color-primary-bg)' : 'transparent',
          }}
        >{item}</a>
      ))}

      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 10 }}>
        <button
          data-od-id="theme-toggle"
          onClick={onToggleDark}
          style={{
            height: 32, border: '1px solid var(--brand-color-border)', borderRadius: 8,
            background: 'transparent', color: 'var(--brand-color-text-secondary)',
            font: 'inherit', fontSize: 12, cursor: 'pointer',
          }}
        >{dark ? 'Light mode' : 'Dark mode'}</button>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{
            width: 28, height: 28, borderRadius: '50%', background: 'var(--brand-color-primary-bg)',
            color: 'var(--brand-color-primary-text)', display: 'inline-flex', alignItems: 'center',
            justifyContent: 'center', fontSize: 11, fontWeight: 600,
          }}>MO</span>
          <span style={{ fontSize: 12, color: 'var(--brand-color-text-secondary)' }}>Maya Okafor</span>
        </div>
      </div>
    </nav>
  );
};
window.Sidebar = Sidebar;
