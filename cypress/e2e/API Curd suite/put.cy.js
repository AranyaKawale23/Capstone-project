describe('PUT Update Employee', () => {
    it('should update the employee information', () => {
      const employeeId = 1;
      const updatedData = {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone: "0987654321",
        organization: "TechCorp",
        designation: "Manager",
        salary: 75000,
      };
  
      cy.request('PUT', `http://localhost:5000/api/v1/employees/${employeeId}`, updatedData)
        .then((response) => {
          expect(response.status).to.eq(200);
          const responseBody = response.body;
          console.log(responseBody);
  
          if (Array.isArray(responseBody)) {
            console.log("Response is an array");
            expect(responseBody[0]).to.have.property('id', employeeId);
          } else {
            console.log("Response is an object", responseBody);
          }
        });
    });
  });
  



  describe('PUT Update Employee', () => {
    it('should update the employee information', () => {
      const employeeId = 1;
      const updatedData = {
        first_name: "Jane",
        last_name: "Smith",
        email: "jane.smith@example.com",
        phone: "0987654321",
        organization: "TechCorp",
        designation: "Manager",
        salary: 75000,
      };
  
      cy.request('PUT', `http://localhost:5000/api/v1/employees/${employeeId}`, updatedData)
        .then((response) => {
          expect(response.status).to.eq(201);
          const responseBody = response.body;
          console.log(responseBody);
  
          if (Array.isArray(responseBody)) {
            console.log("Response is an array");
            expect(responseBody[0]).to.have.property('id', employeeId);
          } else {
            console.log("Response is an object", responseBody);
          }
        });
    });
  });
  