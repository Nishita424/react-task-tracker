import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  return (
    <div className="container">
      <Header title="Task Tracker App" />
      <Tasks />
    </div>
  );
}

export default App;
