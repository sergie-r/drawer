type SizeParams = {
  width: number;
  height: number;
}

interface ButtonProps {
  onChangeCanvasSize: (size: SizeParams) => void
}

const buttonsConfig = [
  {
    size: {
      width: 300, height: 200
    },
    label: 'Small'
  },
  {
    size: {
      width: 600, height: 400
    },
    label: 'Medium'
  },
  {
    size: {
      width: 900, height: 600
    },
    label: 'Large'
  }
];

const Buttons = ({onChangeCanvasSize}: ButtonProps) => {
  return (
    <div data-testid="buttons">
      {buttonsConfig.map((button, index) => (
        <button 
          className="sizeButton"
          key={index} 
          onClick={() => onChangeCanvasSize(button.size)}
        >
          {button.label}
        </button>
      ))}
    </div>
  )
}

export default Buttons;