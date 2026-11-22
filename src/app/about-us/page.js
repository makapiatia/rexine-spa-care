import { AboutUs } from '../../components/Main/AboutUs';
import { pageMetadata, siteName } from '../metadata';

export const metadata = pageMetadata({
  title: `About Us | ${siteName}`,
  description: 'Meet the technician behind Rexine Spa Care: over a decade of spa service experience with brands '
    + 'like Bullfrog, Caldera, HotSpring and Sundance.'
});

export default function AboutUsPage() {
  return <AboutUs />;
}
