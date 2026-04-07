import type { Metadata } from 'next';
import ApplyFunnel from './ApplyFunnel';

export const metadata: Metadata = {
  title: 'Apply to Work With LeftLane Marketing | Giveaway Growth Consultancy',
  description:
    "Apply to work with LeftLane Marketing. We've run 400+ vehicle giveaways and generated $250M for clients. Limited spots available.",
};

export default function ApplyPage() {
  return <ApplyFunnel />;
}
