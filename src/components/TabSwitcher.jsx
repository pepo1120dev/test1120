const TabSwitcher = ({ tabs, activeTab, onTabChange }) => (
  <div className="tabs-switch flex gap-3 rounded-full bg-white/80 p-2 shadow-soft ring-1 ring-border">
    {tabs.map((tab) => (
      <button
        key={tab.id}
        type="button"
        onClick={() => onTabChange(tab.id)}
        aria-pressed={activeTab === tab.id}
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default TabSwitcher;
