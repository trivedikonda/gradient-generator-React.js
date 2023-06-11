// Write your code here
import {GradientItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {colorGradientDetails, changeDirection, isActive} = props
  const {value, displayText} = colorGradientDetails
  const specifyDirection = () => {
    changeDirection(value)
  }

  return (
    <GradientItem>
      <DirectionButton
        onClick={specifyDirection}
        type="button"
        isActive={isActive}
      >
        {displayText}
      </DirectionButton>
    </GradientItem>
  )
}

export default GradientDirectionItem
