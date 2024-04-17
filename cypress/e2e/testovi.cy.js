/// <reference types="cypress" />

describe('BitStarz', () => {

    it ('RegFlow', () => {

        cy.visit('https://test.bitstarz.com/');
        cy.get('[data-cy="signup_btn_header"]').click();
        cy.get('[data-cy="cy-sign-up-email-step-input"]').type('mijo.dujakovic+2@gmail.com');
        cy.get('[data-cy="cy-sign-up-email-step-button"]').click();
        cy.get('[data-cy="cy-sign-up-username-step-input"]').type('TestBitStarz');
        cy.get('[data-cy="cy-sign-up-username-step-button"]').click();
        cy.get('[data-cy="cy-sign-up-password-step-input"]').type('Test123.');
        cy.get('[data-cy="cy-sign-up-password-step-button"]').click();
        cy.get('[data-cy="cy-currency-modal-list-item"]').first().click();
        cy.get('[data-cy="cy-sign-up-terms-step-btn"]').click();
        cy.get('[data-cy="cy-sign-up-newsletter-step-link"]').click();

    });


    it ('HomepageFAQ1', () => {

        cy.visit('https://test.bitstarz.com/');
        cy.contains('How to win').click({force: true});
        cy.get('[class="c-jackpotz-mania-faq-item__icon"]').eq(0).click();
        cy.get('[class="c-jackpotz-mania-faq-item__text"]').eq(0).should('contain.text', "What is Jackpotz Mania?");
        cy.get('[class="c-jackpotz-mania-faq-item-answer__text"]').eq(0).should('have.text', "Jackpotz Mania is an original feature by BitStarz, meaning you'll only find it here (until someone might copy it). Here you'll have a daily chance to win two progressive jackpots and compete for 1,000 additional prizes every month. Best of all? It's FREE!");
    });

    it ('HomepageFAQ2', () => {

        cy.visit('https://test.bitstarz.com/');
        cy.contains('How to win').click({force: true});
        cy.get('[class="c-jackpotz-mania-faq-item__icon"]').eq(2).click();
        cy.get('[class="c-jackpotz-mania-faq-item__text"]').eq(2).should('contain.text', "How come Jackpotz Mania is FREE?");
        cy.get('[class="c-jackpotz-mania-faq-item-answer__text"]').eq(2).should('have.text', "Well, who doesn't like free samples? Shoutout to Costco.  Besides that, we think it's only fair to give you a chance to try before you make a deposit. Some casinos give you one set of regular spins, but you didn't come here to win a couple of dollars, right? That's why we give you a daily chance to hit TWO progressive jackpots and compete for 1,000 monthly prizes, FOR FREE!");
    });

    it ('HomepageFAQ3', () => {

        cy.visit('https://test.bitstarz.com/');
        cy.contains('How to win').click({force: true});
        cy.get('[class="c-jackpotz-mania-faq-item__icon"]').eq(5).click();
        cy.get('[class="c-jackpotz-mania-faq-item__text"]').eq(5).should('contain.text', "I've lost my ACTIVE status. How to get it back?");
        cy.get('[class="c-jackpotz-mania-faq-item-answer__text"]').eq(5).should('have.text', "No worries, the JPM statuses are updated in real time. Which means that as soon as you meet the requirements again (deposit at least once and wager with real money a minimum of $1,000 or equivalent in your currency) you'll get your Active status back right away!");
    });

    it('SearchGame', () => {

        cy.visit('https://test.bitstarz.com/');
        cy.get('[id="gameSearchInput"]').type('Elvis Frog', ({force: true}))
        cy.get('[alt="Elvis Frog TRUEWAYS Slot"]').click();
        
    });
});