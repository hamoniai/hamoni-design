// App shell: composes the sidebar, list rail and run area into one surface.
const App = () => {
  const { useState, useEffect } = React;
  const Sidebar = window.Sidebar;
  const ListRail = window.ListRail;
  const ChatArea = window.ChatArea;

  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark);
  }, [dark]);

  return (
    <div data-od-id="app-shell" style={{
      height: '100%', display: 'flex',
      background: 'var(--brand-color-bg-layout)', color: 'var(--brand-color-text)',
    }}>
      <Sidebar dark={dark} onToggleDark={() => setDark((v) => !v)} />
      <ListRail />
      <ChatArea />
    </div>
  );
};
window.App = App;
