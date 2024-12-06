describe('POST Create Employee', () => {
    it('should create a new employee', () => {
      const employeeData = {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        organization: "TechCorp",
        designation: "Engineer",
        salary: 60000,
      };
  
      cy.request('POST', 'http://localhost:5000/api/v1/employees', employeeData)
        .then((response) => {
          expect(response.status).to.eq(200);
          console.log(response.body);
        });
    });
  });
  


  describe('POST Create Employee', () => {
    it('should create a new employee', () => {
      const employeeData = {
        first_name: "John",
        last_name: "Doe",
        email: "john.doe@example.com",
        phone: "1234567890",
        organization: "TechCorp",
        designation: "Engineer",
        salary: 60000,
      };
  
      cy.request('POST', 'http://localhost:5000/api/v1/employees', employeeData)
        .then((response) => {
          expect(response.status).to.eq(201);
          console.log(response.body);
        });
    });
  });
  