describe('DELETE Employee', () => {
    it('should delete the specified employee', () => {
      const employeeId = 7;
      cy.request('DELETE', `http://localhost:5000/api/v1/employees/${employeeId}`)
        .then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.have.property('message', 'Employee successfully deleted');
          console.log(response.body);
        });
    });
  });
  



  describe('DELETE Employee', () => {
    it('should delete the specified employee', () => {
      const employeeId = 7;
      cy.request('DELETE', `http://localhost:5000/api/v1/employees/${employeeId}`)
        .then((response) => {
          expect(response.status).to.eq(201);
          expect(response.body).to.have.property('message', 'Employee successfully deleted');
          console.log(response.body);
        });
    });
  });
  