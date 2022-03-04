import React from 'react'
import styledComponents from 'styled-components'

const Container = styledComponents.div`
  height: 60px;
`

const Wrapper = styledComponents.div`
  padding: 10px 20px;
  display: flex;
  justify-content:space-between;
`

const Left = styledComponents.div`
  flex:1;
`
const Center = styledComponents.div`
  flex:1;
`
const Right = styledComponents.div`
  flex:1;
`

const Language = styledComponents.span`
  font-size: 14px;
  cursor: pointer;
`


const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>FR</Language>
          <SearchContainer>
            input
            icon
          </SearchContainer>
        </Left>
        <Center>center</Center>
        <Right>right</Right>
      </Wrapper>
    </Container>
  )
}

export default Navbar
