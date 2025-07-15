import Layout from '../components/shared/Layout';
import Hero from '../components/hero page/hero';

export default function LandingPage() {
  return (
    <Layout showUserNav={true} title="Welcome to Booking React">
      <Hero />
      {/* Add more sections here like Features, HowItWorks, etc */}
    </Layout>
  );
}
