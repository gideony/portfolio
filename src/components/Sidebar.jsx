import Avatar  from '../img/minhafoto.png';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gideony" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="#" className="btn">
        Download currículo
      </a>
    </aside>
  );
};

export default Sidebar;