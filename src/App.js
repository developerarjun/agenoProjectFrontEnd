import './App.css';
import Footer from './blocks/Layouts/Footer';
import AppHeader from './blocks/Layouts/AppHeader';
import Menu from './blocks/Layouts/Menu';
import TopHeader from './blocks/Layouts/TopHeader';
import MobileHeader from './blocks/MobileLayout/MobileHeader'; 
function App() {
  return (
    <header className="header logo-content--left">
      <MobileHeader></MobileHeader>
      <TopHeader></TopHeader>
      <AppHeader></AppHeader>
      <Menu></Menu>
      <Footer></Footer>
    </header>
  );
}

export default App;
