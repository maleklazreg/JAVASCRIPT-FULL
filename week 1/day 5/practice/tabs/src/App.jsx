import React, { useState } from 'react';

const Tabs = ({ items }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <div>
      <div className="tab-headers">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={activeTab === index ? 'active' : ''}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="tab-content">
        {items[activeTab].content}
      </div>
    </div>
  );
};

const App = () => {
  const tabItems = [
    { label: 'Tab 1', content: 'Content of Tab 1' },
    { label: 'Tab 2', content: 'Content of Tab 2' },
    { label: 'Tab 3', content: 'Content of Tab 3' },
  ];

  return (
    <div>
      <h1>Tabs Example</h1>
      <Tabs items={tabItems} />
    </div>
  );
};

export default App;