class LoginPage
{

    maximize()
    {
        return cy.viewport(1920, 1080)
    }
    minimize()
    {
        return cy.viewport(500, 264)
    }
    logo()
    {
        return cy.get("img[alt='The Seattle Public Library']")
    }
    infoBtn()
    {
        return cy.get('.icon-info-circled')
    }
    userName()
    {
        return cy.get("[data-js$='username_login']")
    }
    pin()
    {
        return cy.get("[name$='user_pin']")
    }
    rememberMeCheck()
    {
        return cy.get("[testid$='checkbox_rememberme']")
    }
    loginBtn()
    {
        return cy.get("[data-js$='button_login']") 
    }
    popupMsg()
    {
        return cy.get(".message-text")
    }
    forgotPin()
    {
        return cy.get("[testid$='link_forgotpin']")
    }
    barcodeField()
    {
        return cy.get("#barcode")
    }
    sendBtn()
    {
        return cy.get("#submit_forgot")
    }
    homeBtn()
    {
        return cy.get("[data-ga-label='Home']")
    }
    recentStaffLists()
    {
        return cy.get("#main > div > div:nth-child(2) > div > div.cp-list-carousel > div > h3")
    }
    exploreArrow()
    {
        return cy.get("#header_main_nav > li:nth-child(2) > a > span.icon-arrow").click({force:true})
    }
    newTitles()
    {
        return cy.get("#header_main_nav > li.dropdown.desktop.mobile.open > div > div > div > ul > li:nth-child(2) > a").click()
    }
    booksNMore()
    {
        return cy.get("#header_main_nav > li:nth-child(3) > a > span.icon-arrow").click({force:true})
    }
    whatsNew()
    {
        return cy.get("a[href='https://www.spl.org/library-collection/books-movies-and-music/whats-new']").click()
    }
    

}
export default LoginPage;