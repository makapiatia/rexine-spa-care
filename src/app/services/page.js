import { ServicePage } from '../../components/Main/Services';
import { pageMetadata, siteName } from '../metadata';

export const metadata = pageMetadata({
  title: `Services + Pricing | ${siteName}`,
  description: 'Spa maintenance plans from $199/month, plus $549 full cleanings for drains and refills, start '
    + 'ups and shut downs. See what each visit includes and what to expect.'
});

export default function ServicesPage() {
  return <ServicePage />;
}
