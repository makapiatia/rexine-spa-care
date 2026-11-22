import { Contact } from '../../components/Main/Contact';
import { pageMetadata, siteName } from '../metadata';

export const metadata = pageMetadata({
  title: `Contact | ${siteName}`,
  description: 'Call, text or email Rexine Spa Care, or send a note to book a spa visit. See our Phoenix-area '
    + 'service map and business hours.'
});

export default function ContactPage() {
  return <Contact />;
}
