import { Selector } from 'testcafe'

fixture('DEV Tests')
    .page('http://www.webdriveruniversity.com/');

test("Check founder's names", async(t) => {
    const aboutLink = Selector('h1').withText('CONTACT US');
    const boton = Selector('#form_buttons > input:nth-child(2)');

    await t
    .expect(aboutLink.exists).ok()
    .click(aboutLink)
    .expect(boton.exists).ok();
});
