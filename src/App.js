import './App.css';
import AppFooter from './blocks/Layouts/Footer';
import AppHeader from './blocks/Layouts/Header';
import AppMenu from './blocks/Layouts/Menu';
import AppTopHeader from './blocks/Layouts/topHeader';
import AppMobileHeader from './blocks/MobileLayout/mobileHeader'; 
function App() {
  return (
    <header class="header logo-content--left">
      <AppMobileHeader></AppMobileHeader>
      <AppTopHeader></AppTopHeader>
      <AppHeader></AppHeader>
      <AppMenu></AppMenu>
      <AppFooter></AppFooter>
    </header>
  );
}

export default App;
