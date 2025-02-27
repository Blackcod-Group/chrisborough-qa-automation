import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

// A user should be able to login with username and password successfully
Given(/^I launch the app$/, () => {
  cy.clearAllCookies()
  //cy.visit('/', {failOnStatusCode: false});
  //return true;
  cy.contains("Please provide the OTP sent to your email address").should("be.visible")
});

When(/^I navigate to dashboard to view all board details$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.showBalanceField).should('be.visible');
    cy.wait(1000);
    cy.clickElement(sel.showBalanceField).should('be.visible');
    cy.wait(1000);
    cy.contains("Pay-Out").should("be.visible").click({ force: true });
    cy.wait(1000);
    cy.contains("Pay-in").should("be.visible").click({ force: true });
    cy.contains("OMOLAJA MUHAMMED ABUBAKAR").should("be.visible");
    cy.contains("See All").should("be.visible").click({ force: true });
    cy.typeAText(sel.searchField, sel.search);
    cy.clickElement(sel.searchField).clear()
    cy.typeAText(sel.searchField, sel.search2);
    cy.contains("Back").should("be.visible").click({ force: true });

    // virtual Account
    cy.contains("Virtual Accounts").should("be.visible").click({ force: true })
    cy.typeAText(sel.searchField, sel.accountNumber);
    //cy.clickElement(sel.actionView),{force: true}
    cy.contains("Back").should("be.visible").click({ force: true });

    //Request an account flow
    cy.contains("Request an account").should("be.visible").click({ force: true });
    cy.get("input#business_name").clear({force: true})
    cy.typeAText(sel.businessNameField, sel.businessName);
    cy.typeAText(sel.bvnField, sel.bvn);
    cy.typeAText(sel.ninField, sel.nin);
    cy.typeAText(sel.phoneNumberField, sel.phoneNumber);

    cy.get("select[name='channel']")
      .select("Wema")
      .should("have.value", "Wema")

    cy.typeAText(sel.rcNumberField, sel.rcNumber)
    cy.contains("Submit")
      .should("be.enabled")
      .click({ force: true })

    cy.contains("Virtual Account created successfully").should("be.visible")

    cy.contains("Export").should("be.visible").click({force: true})

    // Navigate back to the home page
    cy.contains("Main Menu").should("be.visible").click({ force: true });

    //cy.contains("span", "Payouts & Payins").should("be.visible");
    //cy.get("select.cursor-pointer").select("30").debug();
    //cy.get('.px-2').select("30")

    // cy.get("select.cursor-pointer")
    //   .select("30")
    //   .should("have.value", "30");

    // cy.get("select.cursor-pointer")
    //   .select("366")
    //   .should("have.value", "366", {setTimeout: 130000});

    // cy.get("select.cursor-pointer")
    //   .select("7")
    //   .should("have.value", "7", {setTimeout: 130000});
  });
});

When(/^I validate my transaction page details$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    //cy.typeAText(sel.passwordField, sel.password)
    cy.contains("Transactions").should("be.visible").click({force: true})
    cy.typeAText(sel.searchField, sel.search3);
  })
});

When(/^I click on login in button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.LoginBtn)
  })
});

Then(/^I should view inventory list successfully$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.contains("Swag Labs").should("be.visible")
  })
})

When(/^I click on name Z to A$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.wait(2000)
    cy.get(sel.filterField).select(sel.ztoa)
  })
});

When(/^I click on price Low to high$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.get(sel.filterField).select(sel.lowToHight)
    cy.wait(4000)
  })
});

// A user should be able to Add to cart successfully
When(/^I click on add to cart button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.addToCartBtn)
  })
});

When(/^I click on shopping cart badge Icon$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.shoppingCartbadge)
  })
});

When(/^I click on remove button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.removeBtn)
  })
});

When(/^I click on continue shopping button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.contShoppingBtn)
  })
});

When(/^I click on Add to cart button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.addToCartBtn)
  })
});

When(/^I click on cart Icon$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.shoppingCartbadge)
  })
});

// A user should be able to checkout successfully
When(/^I click on checkout button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.checkOutBtn)
  })
});

When(/^I input First and Last name$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.typeAText(sel.firstNameField, sel.firstName)
    cy.typeAText(sel.lastNameField, sel.lastName)
  })
});

When(/^I input my zipcode$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.typeAText(sel.postalCodeField, sel.postalCode)
  })
});

When(/^I click on continue button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.continueBtn)
  })
});

When(/^I click on Finish button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.finishBtn)
  })
});

When(/^I click on Hamburger button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.burgerMenuBtn)
  })
});

Then(/^I click on Logout button$/, () => {
  cy.fixture('DashboardObj.json').then((sel) => {
    cy.clickElement(sel.logOutBtn)
  })
});
