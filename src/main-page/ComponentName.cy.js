import MainPage from './MainPage'

describe('ComponentName.cy.js', () => {
  it('playground', () => {

    cy.mount(<MainPage pages={['1', '2', '3', '4']}/>)
  })
})