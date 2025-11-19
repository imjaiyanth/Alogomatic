import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFoundPage() {
  return (
    <>
      <SEO
        title="Page Not Found | Meghamsys"
        description="The page you were looking for could not be found. Return to the Meghamsys home page to continue exploring our connected operations work."
        url="https://www.meghamsys.com/404"
      />
      <section className="section section--centered">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1 className="metallic-heading">This page slipped off the grid.</h1>
          <p>Let&apos;s reconnect you with the work that matters.</p>
          <Link className="button" to="/">
            Back to home
          </Link>
        </div>
      </section>
    </>
  );
}
