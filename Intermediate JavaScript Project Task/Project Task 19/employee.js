/*let Employee = {
  salary: 100000,  

  payGrades: {
    entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
    midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
    seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
  },

  getCadre: function() {
    if (this.salary >= this.payGrades.entryLevel.minSalary && this.salary <= this.payGrades.entryLevel.maxSalary) {
      return 'entryLevel';
    } else if (this.salary >= this.payGrades.midLevel.minSalary && this.salary <= this.payGrades.midLevel.maxSalary) {
      return 'midLevel';
    } else return 'seniorLevel';
  },

  calculateTax: function() {
    return this.payGrades[this.getCadre()].taxMultiplier * this.salary;
  },

  getBenefits: function() {
    return this.payGrades[this.getCadre()].benefits.join(', ');
  },

  calculateBonus: function() {
    return .02 * this.salary;
  },

  reimbursementEligibility: function() {
    let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
    let totalBenefitsValue = 0; 
    let employeeBenefits = this.payGrades[this.getCadre()].benefits;
    for (let i = 0; i < employeeBenefits.length; i++) {
      totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
    }
    return totalBenefitsValue;
  },

  getEmployeeInformation: function(inputSalary) {
    this.salary = inputSalary; // Update salary property
    console.log('Cadre: ' + this.getCadre());
    console.log('Tax: ' + this.calculateTax());
    console.log('Benefits: ' + this.getBenefits());
    console.log('Bonus: ' + this.calculateBonus());
    console.log('Reimbursement Eligibility: ' + this.reimbursementEligibility() + '\n');
  }
};

Employee.getEmployeeInformation(10000);
Employee.getEmployeeInformation(50000);
Employee.getEmployeeInformation(100000);

module.exports = Employee;
//export default Employee;*/

let Employee = {
  salary: 100000
};

let payGrades = {
  entryLevel: { taxMultiplier: .05, benefits: ['health'], minSalary: 10000, maxSalary: 49999 },
  midLevel: { taxMultiplier: .1, benefits: ['health', 'housing'], minSalary: 50000, maxSalary: 99999 },
  seniorLevel: { taxMultiplier: .2, benefits: ['health', 'housing', 'wellness', 'gym'], minSalary: 100000, maxSalary: 200000 }
};

function getCadre() {
  if (Employee.salary >= payGrades.entryLevel.minSalary && Employee.salary <= payGrades.entryLevel.maxSalary) {
    return 'entryLevel';
  } else if (Employee.salary >= payGrades.midLevel.minSalary && Employee.salary <= payGrades.midLevel.maxSalary) {
    return 'midLevel';
  } else return 'seniorLevel';
}

function calculateTax() {
  return payGrades[getCadre()].taxMultiplier * Employee.salary;
}

function getBenefits() {
  return payGrades[getCadre()].benefits.join(', ');
}

function calculateBonus() {
  return .02 * Employee.salary;
}

function reimbursementEligibility() {
  let reimbursementCosts = { health: 5000, housing: 8000, wellness: 6000, gym: 12000 };
  let totalBenefitsValue = 0;
  let employeeBenefits = payGrades[getCadre()].benefits;
  for (let i = 0; i < employeeBenefits.length; i++) {
    totalBenefitsValue += reimbursementCosts[employeeBenefits[i]];
  }
  return totalBenefitsValue;
}

// Exporting the functions and variables with aliases
export { 
  Employee,
  getCadre as cadre,
  calculateTax as tax,
  getBenefits as benefits,
  calculateBonus as bonus,
  reimbursementEligibility as reimbursement
};
export default Employee;