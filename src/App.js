
import './App.css';
import CounterHook from './components/counter-hook/CounterHook';
import InputHook from './components/input-hook/InputHook';
import TimerHook from './components/timer-hook/TimerHook'

function App() {

  return (
    <div className="App">
      <CounterHook/>
      <InputHook/>
      <TimerHook/>
    </div>
  );
}

export default App;
