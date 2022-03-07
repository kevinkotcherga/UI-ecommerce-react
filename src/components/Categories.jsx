import React from 'react'
import { categories } from '../data'
import styledComponents from 'styled-components'
import CategoryItem from './CategoryItem'

const Container = styledComponents.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`

function Categories() {
  return (
    <Container>
      { categories.map(item => (
        <CategoryItem item={item} key={item.id}/>
      ))}
    </Container>
  )
}

export default Categories