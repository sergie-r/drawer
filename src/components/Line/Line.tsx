import { Lines } from '../../types';
import { roundCoords } from '../../utils/roundCoordinates';


interface LineProps {
  line: Lines,
  index: number,
}

const Line = ({line, index}: LineProps) => {
  const { lineStart, lineEnd } = line;
  const coords = `[${roundCoords(lineStart)}, ${roundCoords(lineEnd)}]`;

  return (
    <div>{`Line ${index + 1} - points ${coords}`}</div>
  )
};

export default Line;