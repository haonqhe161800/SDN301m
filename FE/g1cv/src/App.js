import './App.css';
import { useDispatch } from "react-redux";
import ListRouter from "./routing/Router";
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch()
  })
  return (
    <>
      <ListRouter/>
    </>
  );
}

export default App;
