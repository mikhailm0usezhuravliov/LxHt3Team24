import { Chat, Footer, Header } from './components';

export const App = () => {
  return (
    <div className="app">
      <Header />
      <main>База знань ветерана</main>
      <Chat />
      <Footer />
    </div>
  );
};
