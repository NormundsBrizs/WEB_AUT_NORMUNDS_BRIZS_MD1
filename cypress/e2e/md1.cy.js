import { SelectablePage } from "../pageObjects/selectablePage";

describe('DEMO QA', () => {
  context('Grid tests', () => {
    beforeEach(() => {
      SelectablePage.visit();
    });

    it.only('Input information and validate', () => {
      // Click "Grid"
      SelectablePage.gridButton.click();
      // Click - “Two”, “Four”, “Six”, “Eight”
      SelectablePage.gridItem('Two').click();
      SelectablePage.gridItem('Four').click();
      SelectablePage.gridItem('Six').click();
      SelectablePage.gridItem('Eight').click();
      // Validate that “Two”, “Four”, “Six”, “Eight” are highlighted
      SelectablePage.gridItem('Two').should('have.class', 'active');
      SelectablePage.gridItem('Four').should('have.class', 'active');
      SelectablePage.gridItem('Six').should('have.class', 'active');
      SelectablePage.gridItem('Eight').should('have.class', 'active');
      // Validate that “One”, “Three”, “Five”, “Seven”, “Nine” are not highlighted
      SelectablePage.gridItem('One').should('not.have.class', 'active');
      SelectablePage.gridItem('Three').should('not.have.class', 'active');
      SelectablePage.gridItem('Five').should('not.have.class', 'active');
      SelectablePage.gridItem('Seven').should('not.have.class', 'active');
      SelectablePage.gridItem('Nine').should('not.have.class', 'active');
    })
  })
})