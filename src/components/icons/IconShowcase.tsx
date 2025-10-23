import {
  AnimatedAIBrainIcon,
  AnimatedWebAppIcon,
  AnimatedCube3DIcon,
  AnimatedChatBotIcon,
  AnimatedAutomationIcon,
  AnimatedIntegrationIcon
} from './AnimatedServiceIcons';

/**
 * IconShowcase - Demo component to preview all animated icons
 * This component is for development/documentation purposes only
 */
export default function IconShowcase() {
  const icons = [
    { 
      component: AnimatedAIBrainIcon, 
      name: 'AI Brain', 
      description: 'Neural network with pulsing nodes',
      useCase: 'AI Automation, Machine Learning'
    },
    { 
      component: AnimatedWebAppIcon, 
      name: 'Web App', 
      description: 'Coding brackets with typing effect',
      useCase: 'Web Development, Custom Apps'
    },
    { 
      component: AnimatedCube3DIcon, 
      name: '3D Cube', 
      description: 'Rotating cube with lighting',
      useCase: '3D Configurators, Visualization'
    },
    { 
      component: AnimatedChatBotIcon, 
      name: 'ChatBot', 
      description: 'Chat bubble with typing dots',
      useCase: 'AI Chatbots, Customer Support'
    },
    { 
      component: AnimatedAutomationIcon, 
      name: 'Automation', 
      description: 'Lightning with rotating gears',
      useCase: 'Workflow Automation, Speed'
    },
    { 
      component: AnimatedIntegrationIcon, 
      name: 'Integration', 
      description: 'Network hub with data flow',
      useCase: 'System Integration, APIs'
    }
  ];

  return (
    <div style={{
      padding: '4rem 2rem',
      background: 'linear-gradient(135deg, #020203 0%, #0a0e10 100%)',
      minHeight: '100vh'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          color: '#fff', 
          textAlign: 'center',
          fontSize: '3rem',
          marginBottom: '1rem'
        }}>
          Animated Service Icons
        </h1>
        <p style={{ 
          color: 'rgba(255, 255, 255, 0.6)', 
          textAlign: 'center',
          fontSize: '1.2rem',
          marginBottom: '4rem'
        }}>
          Pure CSS animations • Zero dependencies • Brand-matched
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {icons.map((icon) => {
            const IconComponent = icon.component;
            return (
              <div
                key={icon.name}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '16px',
                  padding: '2rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(82, 240, 255, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.3)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {/* Icon Display */}
                <div style={{
                  background: 'linear-gradient(135deg, #52f0ff 0%, #1ec8ff 100%)',
                  borderRadius: '16px',
                  width: '80px',
                  height: '80px',
                  margin: '0 auto 1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  boxShadow: '0 12px 30px rgba(82, 240, 255, 0.3)'
                }}>
                  <IconComponent size={48} />
                </div>

                {/* Icon Info */}
                <h3 style={{ 
                  color: '#fff',
                  fontSize: '1.5rem',
                  marginBottom: '0.5rem'
                }}>
                  {icon.name}
                </h3>
                <p style={{ 
                  color: 'rgba(255, 255, 255, 0.5)',
                  fontSize: '0.95rem',
                  marginBottom: '1rem'
                }}>
                  {icon.description}
                </p>
                <div style={{
                  display: 'inline-block',
                  background: 'rgba(82, 240, 255, 0.1)',
                  border: '1px solid rgba(82, 240, 255, 0.2)',
                  borderRadius: '20px',
                  padding: '0.4rem 1rem',
                  color: '#52f0ff',
                  fontSize: '0.85rem',
                  fontWeight: '500'
                }}>
                  {icon.useCase}
                </div>

                {/* Size Examples */}
                <div style={{
                  marginTop: '2rem',
                  paddingTop: '1.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                  display: 'flex',
                  justifyContent: 'space-around',
                  alignItems: 'center'
                }}>
                  <div style={{ color: '#52f0ff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComponent size={24} />
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)' }}>24px</span>
                  </div>
                  <div style={{ color: '#52f0ff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComponent size={32} />
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)' }}>32px</span>
                  </div>
                  <div style={{ color: '#52f0ff', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                    <IconComponent size={40} />
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255, 255, 255, 0.4)' }}>40px</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Usage Example */}
        <div style={{
          marginTop: '4rem',
          background: 'rgba(255, 255, 255, 0.02)',
          border: '1px solid rgba(82, 240, 255, 0.2)',
          borderRadius: '16px',
          padding: '2rem'
        }}>
          <h2 style={{ color: '#52f0ff', marginBottom: '1rem' }}>Usage Example</h2>
          <pre style={{
            background: 'rgba(0, 0, 0, 0.3)',
            padding: '1rem',
            borderRadius: '8px',
            overflow: 'auto',
            color: 'rgba(255, 255, 255, 0.8)',
            fontSize: '0.9rem',
            lineHeight: '1.6'
          }}>
{`import { AnimatedAIBrainIcon } from './icons/AnimatedServiceIcons';

// Basic usage
<AnimatedAIBrainIcon size={40} />

// With custom className
<AnimatedAIBrainIcon size={48} className="my-icon" />

// In a styled container
<div style={{ color: 'var(--accent)' }}>
  <AnimatedAIBrainIcon size={32} />
</div>`}
          </pre>
        </div>
      </div>
    </div>
  );
}
