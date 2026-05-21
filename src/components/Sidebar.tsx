import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Activity, 
  BarChart2, 
  Settings, 
  ShieldCheck, 
  Bell,
  LucideIcon,
  X,
  Monitor,
  Server,
  MessageSquare
} from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import FeedbackModal from './FeedbackModal';
import './Sidebar.css';

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  badge?: number;
  href?: string;
  external?: boolean;
}

interface SidebarProps {
  activeTab: string;
  onTabChange: (id: string) => void;
  signalCount: number;
  isOpen?: boolean;
  onClose?: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange, signalCount, isOpen, onClose }) => {
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  const menuItems: MenuItem[] = [
    { id: 'Dashboard', icon: LayoutDashboard, label: 'Dashboard' },
    { id: 'Portfolio', icon: BarChart2, label: 'Paper Portfolio' },
    { id: 'Signals', icon: Activity, label: 'Active Signals', badge: signalCount },
    { id: 'Alerts', icon: Bell, label: 'Alerts' },
    { id: 'Logs', icon: ShieldCheck, label: 'Logs' },
    { id: 'Grafana', icon: Monitor, label: 'Grafana', href: 'https://monitor-trading-system.sharatpatnayakuni.site/login', external: true },
    { id: 'Kafka', icon: Server, label: 'Kafka', href: 'https://kafka-trading-system.sharatpatnayakuni.site/?orgId=1&from=now-1h&to=now&timezone=browser', external: true },
    { id: 'Feedback', icon: MessageSquare, label: 'Feedback' },
    { id: 'Settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <>
      <div 
        className={`sidebar-backdrop ${isOpen ? 'visible' : ''}`} 
        onClick={onClose}
      />
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-logo-section">
          <div className="sidebar-logo-icon">
            <Activity size={20} />
          </div>
          <h2 className="sidebar-logo-text">
            Nifty 500 <span style={{ color: 'var(--accent-color)' }}>Elite</span>
          </h2>
          {isOpen && onClose && (
          <button 
            onClick={onClose}
            className="sidebar-close-btn mobile-only"
          >
            <X size={20} />
          </button>

          )}
        </div>

        <nav className="sidebar-nav">
          <ul className="sidebar-menu">
            {menuItems.map((item) => {
              const isActive = activeTab === item.id;
              
              if (item.external && item.href) {
                return (
                  <li key={item.id}>
                    <a 
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="sidebar-btn glass-hover"
                      style={{ textDecoration: 'none', color: 'inherit' }}
                    >
                      <item.icon size={18} />
                      <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
                    </a>
                  </li>
                );
              }

              return (
                <li key={item.id}>
                  <button 
                    onClick={() => {
                      if (item.id === 'Feedback') {
                        setIsFeedbackOpen(true);
                      } else {
                        onTabChange(item.id);
                      }
                      if (onClose) onClose();
                    }}
                    className={`sidebar-btn glass-hover ${isActive ? 'active' : ''}`}
                  >
                    <item.icon size={18} />
                    <span style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
                    {item.badge != null && item.badge > 0 && (
                      <span className="sidebar-badge">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="sidebar-footer">
          <div className="user-profile">
            <div className="user-avatar">
              JD
            </div>
            <div className="user-info">
              <span className="user-name">Trader Joe</span>
              <span className="user-type">Pro Account</span>
            </div>
          </div>
          <ThemeToggle />
        </div>
      </aside>

      <FeedbackModal 
        isOpen={isFeedbackOpen} 
        onClose={() => setIsFeedbackOpen(false)} 
      />
    </>
  );
};

export default Sidebar;
