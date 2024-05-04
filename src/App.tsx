import { useState } from "react";
import Canvas from './components/Canvas/Canvas';
import LineList from './components/LinesList/LinesList';
import Buttons from "./components/Buttons/Buttons";
import { Lines, CanvasSize } from './types';
import './App.css';

const App = () => {
  const [lines, setLines] = useState<Lines[]>([]);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 900, height: 600 });

  const handleSetLines = (newLine: Lines) => {
    setLines([...lines, newLine])
  }

  const handleChangeCanvasSize = (size: CanvasSize) => {
    setCanvasSize(size)
  }

  return (
    <div className="App">
      <Buttons onChangeCanvasSize={handleChangeCanvasSize} /> 
      <Canvas onSetLines={handleSetLines} canvasSize={canvasSize} />  
      {lines.length > 0 && <LineList lines={lines} />}
    </div>
  );
}

export default App;
