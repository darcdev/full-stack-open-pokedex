describe('Pokedex', function () {
  it('front page can be opened', function () {
    cy.visit('http://0.0.0.0:8080')
    cy.contains('ivysaur')
    cy.contains(
      'Pokémon and Pokémon character names are trademarks of Nintendo.'
    )
  })
  it('a particular pokemon page can be opened', function () {
    cy.visit('http://0.0.0.0:8080')
    cy.contains('venusaur').click()
    cy.contains('venusaur')
    cy.contains('chlorophyll')
  })
})
