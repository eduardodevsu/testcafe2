import DevHomePage from "../page/devhomepage";
import DevAboutPage from "../page/devaboutpage";
import DevDiscussTagPage from "../page/devdiscusstagpage";

const devHomePage = new DevHomePage();
const devAboutPage = new DevAboutPage();
const devDiscussTagPage = new DevDiscussTagPage();

fixture('DEV Tests')
    .page('http://dev.to/');

test("Check founder's names", async(t) => {
    await t
        .click(devHomePage.aboutLink)
        .expect(devAboutPage.firstFounder.exists).ok()
        .expect(devAboutPage.secondFounder.exists).ok()
        .expect(devAboutPage.thirdFounder.exists).ok();
});

test("Filter articles by discuss tag", async (t) => {
    await t
        .click(devHomePage.discussTag)
        .expect(devDiscussTagPage.discussTitle.exists).ok();
});