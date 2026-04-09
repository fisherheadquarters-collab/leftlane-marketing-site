import type { Metadata } from 'next';
import ApplyFunnel from './ApplyFunnel';

export const metadata: Metadata = {
  title: 'Apply to Work With LeftLane Marketing | Giveaway Growth Consultancy',
  description:
    "Apply to work with LeftLane Marketing. We accept a limited number of clients. Tell us about your brand and see if you qualify for The Giveaway Growth Engine.",
  openGraph: {
    title: 'Apply to Work With Us | LeftLane Marketing',
    description:
      "Apply to work with LeftLane Marketing. We accept a limited number of clients. Tell us about your brand and see if you qualify for The Giveaway Growth Engine.",
  },
};

export default function ApplyPage() {
  return <ApplyFunnel />;
}
