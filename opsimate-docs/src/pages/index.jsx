import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

// Icons with OpsiMate blue theme
const GettingStartedIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 16h-2v-6h2v6zm3 0h-2v-8h2v8zm3 0h-2v-4h2v4z"/>
  </svg>
  
);

const IntegrationsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
  </svg>
);

const AlertsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"/>
  </svg>
);

const DashboardIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
  </svg>
);

const UserManagementIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>
);

const DevelopmentIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
  </svg>
);

// ✅ New: Slack & GitHub brand icons
const GitHubIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    style={{ marginRight: '8px' }}
  >
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.17c-3.338.726-4.033-1.61-4.033-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.746.082-.73.082-.73 1.205.084 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.304 3.492.997.108-.774.418-1.305.76-1.606-2.665-.305-5.467-1.334-5.467-5.933 0-1.31.468-2.38 1.236-3.22-.124-.304-.536-1.527.117-3.18 0 0 1.008-.322 3.3 1.23a11.51 11.51 0 013.003-.404c1.02.005 2.046.137 3.003.404 2.29-1.552 3.296-1.23 3.296-1.23.656 1.653.244 2.876.12 3.18.77.84 1.235 1.91 1.235 3.22 0 4.61-2.807 5.624-5.48 5.92.43.37.823 1.103.823 2.222v3.293c0 .32.19.694.8.576C20.565 21.796 24 17.296 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const SlackIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 122.8 122.8"
    fill="currentColor"
    style={{ marginRight: '8px' }}
  >
    <path d="M30.3 77.2c0 6-4.9 10.9-10.9 10.9S8.5 83.2 8.5 77.2s4.9-10.9 10.9-10.9h10.9v10.9zM35.8 77.2c0-6 4.9-10.9 10.9-10.9s10.9 4.9 10.9 10.9v27.3c0 6-4.9 10.9-10.9 10.9-6 0-10.9-4.9-10.9-10.9V77.2zM45.1 30.3c-6 0-10.9-4.9-10.9-10.9S39.1 8.5 45.1 8.5s10.9 4.9 10.9 10.9v10.9H45.1zM45.1 35.8c6 0 10.9 4.9 10.9 10.9s-4.9 10.9-10.9 10.9H17.8c-6 0-10.9-4.9-10.9-10.9 0-6 4.9-10.9 10.9-10.9h27.3zM92.5 45.1c0-6 4.9-10.9 10.9-10.9s10.9 4.9 10.9 10.9-4.9 10.9-10.9 10.9H92.5V45.1zM87 45.1c0 6-4.9 10.9-10.9 10.9s-10.9-4.9-10.9-10.9V17.8c0-6 4.9-10.9 10.9-10.9 6 0 10.9 4.9 10.9 10.9v27.3zM77.7 92.5c6 0 10.9 4.9 10.9 10.9s-4.9 10.9-10.9 10.9-10.9-4.9-10.9-10.9V92.5h10.9zM77.7 87c-6 0-10.9-4.9-10.9-10.9s4.9-10.9 10.9-10.9h27.3c6 0 10.9 4.9 10.9 10.9 0 6-4.9 10.9-10.9 10.9H77.7z"/>
  </svg>
);

const FeatureCard = ({ icon: Icon, title, description, to }) => (
  <Link to={to} className={styles.featureCard}>
    <div className={styles.cardIcon}>
      <Icon />
    </div>
    <div className={styles.cardContent}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
    </div>
  </Link>
);

export default function Home() {
  const features = [
    { icon: GettingStartedIcon, title: 'Getting Started', description: 'Deploy and configure OpsiMate with our comprehensive setup guide', to: '/docs/getting-started/deploy' },
    { icon: DashboardIcon, title: 'Dashboard', description: 'Create custom dashboards and save views for your services', to: '/docs/dashboards/overview' },
    { icon: AlertsIcon, title: 'Alerts', description: 'Configure intelligent alerts and manage notifications effectively', to: '/docs/alerts/adding-alerts' },
    { icon: IntegrationsIcon, title: 'Integrations', description: 'Connect with Grafana, Kibana, Datadog and other monitoring tools', to: '/docs/integrations/overview' },
    { icon: UserManagementIcon, title: 'User Management & Security', description: 'Manage users, admin panels, and audit logs for secure operations', to: '/docs/user-management/register-login' },
    { icon: DevelopmentIcon, title: 'Development', description: 'Extend and customize OpsiMate for your specific needs', to: '/docs/development' }
  ];

  return (
    <Layout title="OpsiMate" description="Unified Service Monitoring & Management Platform">
      <main className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
           <h1 className={styles.heroTitle}>Welcome to OpsiMate</h1>
           <p className="text-xl text-gray-600 dark:text-gray-400 mt-2">
             One platform to monitor, manage, and optimize your entire infrastructure
           </p>
         </div>

          {/* Feature Cards Section */}
          <div className={styles.featuresSection}>
            <h2 className={styles.featuresTitle}>Explore the Docs</h2>
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </div>
          </div>

          {/* Community Section with icons */}
          <div className={styles.communitySection}>
            <h2 className={styles.communityTitle}>Join Our Community</h2>
            <p className={styles.communityDescription}>
              Have questions? Join our Slack Community or check out our GitHub repository.
            </p>
            <div className={styles.communityButtons}>
              <Link
                className={styles.communityButton}
                href="https://github.com/opsimate/opsimate"
              >
                <GitHubIcon /> GitHub
              </Link>
              <Link
                className={styles.communityButton}
                href="https://opsimate.slack.com"
              >
                <SlackIcon /> Slack Community
              </Link>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}



