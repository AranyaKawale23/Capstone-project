describe('GET All Employees', () => {
    it('should return a list of employees', () => {
      cy.request('GET', 'http://localhost:5000/api/v1/employees')
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(Array.isArray(response.body)).to.be.true;
          console.log(response.body);
        });
    });
  });
  
  describe('GET All Employees', () => {
    it('should return a list of employees', () => {
      cy.request('GET', 'http://localhost:5000/api/v1/employees')
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(Array.isArray(response.body)).to.be.true;
          console.log(response.body);
        });
    });
  });
  