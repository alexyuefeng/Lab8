describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/index.html ');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  it('image and sources chage when part horn radio selected', ()=>{
    cy.get('#radio-car-horn').click();
    cy.get('#sound-image').then($el => {
      expect($el).to.have.attr('src', './assets/media/images/car.svg');
    });
    cy.get('#horn-sound').then($el => {
      expect($el).to.have.attr('src', './assets/media/audio/car-horn.mp3');
    });
  });

  it('volume image change when volume is at 66', ()=>{
    cy.get('#volume-number').clear().type(66);
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg')
    });
  });

  it('volume image change when volume is at 33', ()=>{
    cy.get('#volume-number').clear().type(33);
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg')
    });
  });

  it('volume image change when volume is at 0', ()=>{
    cy.get('#volume-number').clear().type(0);
    cy.get('#volume-image').then($el =>{
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg')
    });
  });

  it('honk button disabled when textbox input is empty', ()=>{
    cy.get('#volume-number').clear();
    cy.get('#honk-btn').then($el =>{
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('honk button disabled when textbox input is non-number', ()=>{
    cy.get('#volume-number').clear().type('h');
    cy.get('#honk-btn').then($el =>{
      expect($el).to.have.prop('disabled', true);
    });
  });

  it('input volume number out of range, negative', ()=>{
    cy.get('#volume-number').clear().type(-5);
    cy.get('#honk-btn').click();
    cy.get('#party-horn-form').then($el => $el[0].checkValidity()).should('be.false')
  });

  it('input volume number out of range, positive', ()=>{
    cy.get('#volume-number').clear().type(200);
    cy.get('#honk-btn').click();
    cy.get('#party-horn-form').then($el => $el[0].checkValidity()).should('be.false')
  });

  it('input volume number inside range check', ()=>{
    cy.get('#volume-number').clear().type(50);
    cy.get('#honk-btn').click();
    cy.get('#party-horn-form').then($el => $el[0].checkValidity()).should('be.true')
  });
});