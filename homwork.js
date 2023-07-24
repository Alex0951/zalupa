describe('Parametrized test homwork', ()=>{

    const tests = ['absdf23334@gmail.com', 'alex12345@gmail.com', 'text3@gmail.com'];
  
    tests.forEach(text => {
      it(Test for text "${text}", () => { 
        cy.visit('https://sanitarskyi-ngx-admin.herokuapp.com/');
        cy.get('[src="assets/images/material-dark-theme.jpg"]').click();
        cy.get('.expand-state.ng-tns-c141-9').click();
        cy.get('.menu-title').contains('Form Layouts').click();
        cy.get('#inputEmail3').type('${text}');
        cy.get('#inputPassword3').type('123passwor');
        cy.get('button.appearance-filled[status="warning"]').contains('Sign in').click();
   
      })
    })
  
  })
  