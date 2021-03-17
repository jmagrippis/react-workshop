import { testedViewports } from '../testedViewports'

describe('blog', () => {
  testedViewports.forEach((viewport) => {
    describe(`on ${viewport}`, () => {
      before(() => {
        cy.viewport(viewport)
      })

      it('can navigate to the articles, and back', () => {
        cy.visit('/')

        cy.findByRole('heading', { name: 'React Workshop', level: 1 }).should(
          'exist'
        )
      })
    })
  })
})
