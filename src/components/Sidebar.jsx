import Avatar  from '../img/minhafoto.png';
import '../styles/components/sidebar.sass';
import InformationContainer from './InformationContainer';
import SocialNetworks from './SocialNetworks';

import '../components/arquivopdf/curriculo.pdf';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gideony" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks/>
      <InformationContainer/>
      <a href="https://drive.google.com/file/d/1jNdpTLYEXYM7bjLbZX4iBKfe75Ryn1Z6/view?usp=sharing" className="btn">
        Download currículo
      </a>
    </aside>
    
  );
};

export default Sidebar;