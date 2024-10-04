import { useParams } from 'react-router-dom';
import ChairmanDesk from '../components/ChairmanDesk';
import CorporateProfile from '../components/CorporateProfile';
import History from '../components/History';
import QualityPolicy from '../components/QualityPolicy';
import { useEffect } from 'react';

const Corporate = () => {
  const { componentId } = useParams();

  useEffect(() => {
    if (componentId) {
      const element = document.getElementById(componentId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [componentId]);
  return (
    <>
      <CorporateProfile />
      <ChairmanDesk />
      <QualityPolicy />
      <History />
    </>
  );
};
export default Corporate;
