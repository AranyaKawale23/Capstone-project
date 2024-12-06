describe('GET Employee by ID', () => {
    it('should return the employee with the specified ID', () => {
      const employeeId = 1;
      cy.request('GET', `http://localhost:5000/api/v1/employees/${employeeId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(Array.isArray(response.body)).to.be.true;
          expect(response.body[0]).to.have.property('id', employeeId);
          console.log(response.body);
        });
    });
  });
  

  describe('GET Employee by ID', () => {
    it('should return the employee with the specified ID', () => {
      const employeeId = 1;
      cy.request('GET', `http://localhost:5000/api/v1/employees/${employeeId}`)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(Array.isArray(response.body)).to.be.true;
          expect(response.body[0]).to.have.property('id', employeeId);
          console.log(response.body);
        });
    });
  });
  