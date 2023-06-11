// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-image: linear-gradient(${props => props.bgColorGradientValue});
`

export const GradientContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Roboto';
`

export const MainHeading = styled.h1`
  color: #ffffff;
  font-size: 30px;
  text-align: center;
  font-weight: 700;
  @media (min-width: 768px) {
    font-size: 45px;
  }
`

export const SubHeading = styled.p`
  color: #ededed;
  font-size: 20px;
  font-weight: 500;
  @media (min-width: 768px) {
    font-size: 30px;
  }
`

export const GradientDirectionsContainer = styled.ul`
  list-style-type: none;
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`

export const ColorsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 350px;
  margin-bottom: 40px;
`

export const HexCodeAndColorBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 20px;
  margin-left: 20px;
`

export const ColorName = styled.p`
  color: #ffffff;
  font-size: 17px;
`

export const InputColor = styled.input`
  height: 50px;
  width: 120px;
  background-color: ${props => props.color};
  background: transparent;
  cursor: pointer;
  outline: none;
  border: none;
  display: block;
`

export const CustomButton = styled.button`
  height: 40px;
  width: 140px;
  cursor: pointer;
  outline: none;
  color: #1e293b;
  background-color: #00c9b7;
  border-radius: 4px;
  border-width: 0px;
  font-size: 16px;
  font-weight: 600;
`
