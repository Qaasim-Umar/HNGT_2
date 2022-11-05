import Header from './components/Header/Header';
import Link from './components/Link/Link';
import Footer from './components/Footer/Footer';
import Icon from './components/Icon/Icon';
import './App.css';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <div>
      <Header />
      <Link name='slack' link='' id='slack' />
      <Link name='Twitter Link' link='https://twitter.com/i_codejs?t=Yh-mkuhJsgVyh8uZdoC8sg&s=09'  id='twitter' />
      <Link name='Zuri Team' link='https://training.zuri.team/' id='btn_zuri' />
      <Link name='Zuri Books' link='http://books.zuri.team ' id='books' />
      <Link
        name='Python Books'
        link='https://books.zuri.team/'
        id='book__python'
      />
      <Link
        name='Background Check for Coders'
        link='https://background.zuri.team '
        id='pitch'
      />
      <Link
        name='Design Books'
        link='https://books.zuri.team/design-rules'
        id='book__design'
      />

      <Icon />
      <Footer />

      <Contact/>
    </div>
  );
}

export default App;
