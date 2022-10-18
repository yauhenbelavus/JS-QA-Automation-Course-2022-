import { baseUrl } from "../support/constans";

export class BasePage {
  
  protected url: string;
   
  constructor() {
    this.url = baseUrl;
  } 

public visitPage() {
     cy.viewport(1920, 1080);
     cy.visit(this.url);
  }
   
get pageUrl() {
    return cy.url();
  }

get pageTitle() {
     return cy.title();
  }
  
public waitForPageLoad(pageUrl: string) {
     this.pageUrl.should('include', pageUrl); 
  }

public navigatePageBack() {
     cy.go('back');
  }

public checkForTitleIsCorrect(titleName: string) {
     this.pageTitle.should('include', titleName);
  }

public refreshPage() {
     cy.reload();
  }
}