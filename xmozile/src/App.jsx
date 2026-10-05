import React from 'react';
import { Rocket, Shield, Zap, Code, Smartphone, Globe } from 'lucide-react';
import './index.css';

function App() {
  const features = [
    {
      icon: <Rocket size={24} />,
      title: 'Blazing Fast',
      description: 'Built for speed and optimized for performance to give your users the best experience.'
    },
    {
      icon: <Shield size={24} />,
      title: 'Enterprise Security',
      description: 'Bank-grade security protocols to keep your data and your users safe.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Instant Deployment',
      description: 'Push to production in seconds with our globally distributed edge network.'
    },
    {
      icon: <Code size={24} />,
      title: 'Developer First',
      description: 'Intuitive APIs and extensive documentation makes integration a breeze.'
    },
    {
      icon: <Smartphone size={24} />,
      title: 'Mobile Optimized',
      description: 'Responsive design that looks perfect on any device, from phones to desktops.'
    },
    {
      icon: <Globe size={24} />,
      title: 'Global Reach',
      description: 'Serve your content from data centers around the world with zero configuration.'
    }
  ];

  return (
    <>
      <nav>
        <div className="logo">Xmozile</div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#about">About</a>
          <a href="#pricing">Pricing</a>
        </div>
        <button className="cta-button">Get Started</button>
      </nav>

      <section className="hero">
        <div className="hero-background"></div>
        <h1>Build the Future with Xmozile</h1>
        <p>The next-generation platform for teams who want to move fast and build things that scale beautifully.</p>
        <div className="hero-buttons">
          <button className="cta-button">Start Free Trial</button>
          <button className="secondary-button">View Documentation</button>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Why choose Xmozile?</h2>
        <div className="feature-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">
                {feature.icon}
              </div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      <footer>
        <p>&copy; {new Date().getFullYear()} Xmozile. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
