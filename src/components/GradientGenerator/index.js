import {Component} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'

import {
  AppContainer,
  GradientContainer,
  MainHeading,
  SubHeading,
  GradientDirectionsContainer,
  ColorsContainer,
  HexCodeAndColorBox,
  ColorName,
  InputColor,
  CustomButton,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    color1: '#8ae323',
    color2: '#014f7b',
    activeGradientDirection: gradientDirectionsList[0].value,
    gradientValue: `to ${gradientDirectionsList[0].value}, #8ae323, #014f7b `,
  }

  onChangeColor1 = event => {
    this.setState({color1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({color2: event.target.value})
  }

  changeDirection = direction => {
    this.setState({activeGradientDirection: direction})
  }

  renderBackgroundGradient = () => {
    const {color1, color2, activeGradientDirection} = this.state
    this.setState({
      gradientValue: `to ${activeGradientDirection}, ${color1}, ${color2} `,
    })
  }

  render() {
    const {color1, color2, activeGradientDirection, gradientValue} = this.state
    return (
      <AppContainer
        bgColorGradientValue={gradientValue}
        data-testid="gradientGenerator"
      >
        <GradientContainer>
          <MainHeading>Generate a CSS Color Gradient</MainHeading>
          <SubHeading>Choose Direction</SubHeading>
          <GradientDirectionsContainer>
            {gradientDirectionsList.map(eachColorGradient => (
              <GradientDirectionItem
                key={eachColorGradient.directionId}
                colorGradientDetails={eachColorGradient}
                changeDirection={this.changeDirection}
                isActive={eachColorGradient.value === activeGradientDirection}
              />
            ))}
          </GradientDirectionsContainer>
          <SubHeading>Pick the Colors</SubHeading>
          <ColorsContainer>
            <HexCodeAndColorBox>
              <ColorName>{color1}</ColorName>
              <InputColor
                type="color"
                onChange={this.onChangeColor1}
                color={color1}
                value={color1}
              />
            </HexCodeAndColorBox>
            <HexCodeAndColorBox>
              <ColorName>{color2}</ColorName>
              <InputColor
                type="color"
                onChange={this.onChangeColor2}
                color={color2}
                value={color2}
              />
            </HexCodeAndColorBox>
          </ColorsContainer>
          <CustomButton type="button" onClick={this.renderBackgroundGradient}>
            Generate
          </CustomButton>
        </GradientContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
