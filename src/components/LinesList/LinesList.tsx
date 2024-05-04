import { Lines } from '../../types';
import Line from '../Line/Line';

interface LineListProps  {
  lines: Lines[]
}

const LineList = ({lines}: LineListProps) => {
  return (
    <div data-testid="line-list">
      {lines.map((line, index) => (
        <div key={index}>
          <Line line={line} index={index} />
        </div>
      ))}
    </div>
  )
};

export default LineList;