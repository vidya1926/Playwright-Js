import test, { expect } from "@playwright/test";
import { loginFunctionality } from "../pages/loginpage";
import { HomePage } from "../pages/homePage";

test.use({ storageState: "sf.json" })
test(`Create lead`, async ({ context, page }) => {
    
    const hp = new HomePage(page);
    await hp.clickAppLancher("AppLauncher");
   

})

