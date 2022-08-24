import './App.css';
import Header from './components/header';
import Form from './components/form';
import MemberList from './components/memberList';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header />
    <main>  
      <Form />
      <MemberList />
    </main>
      <Footer />

    </div>
  );
}

export default App;
