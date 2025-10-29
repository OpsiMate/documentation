import React, { useState } from 'react';
import styles from './NavMenu.module.css';

export default function NavMenu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = [
    { id: 'features', label: 'Features' },
    // { id: 'integrations', label: 'Integrations' },
    { id: 'community', label: 'Community' },
    // { id: 'contact', label: 'Contact' },
  ];

  return (
    <nav className={styles.navMenu}>
      {/* Mobile Toggle Button */}
      <button
        className={styles.menuToggle}
        type="button"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </button>

      {/* Menu Links */}
      <ul className={`${styles.menuList} ${menuOpen ? styles.open : ''}`}>
        {sections.map((section) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={() => setMenuOpen(false)} // close on link click (mobile)
            >
              {section.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
