// import { loginFunctionality } from "../pages/loginpage";
// import { HomePage } from "../pages/homePage";
import  { test} from '../customFixtures';
import { generateRandomData } from '../utils/randomTestdat';

let leadName:string;
let editedLead:string;
test.use({ storageState: "sf.json" })

test.beforeEach("PreCondition steps ",async({sfhome,sflead})=>{
    await sfhome.clickAppLancher("AppLauncher");
    await sflead.clickViewAll();
    await sflead.searchLead("Leads");
    await sflead.clickLeads();
})

test(`Create lead`, async ({sfhome,sflead},testInfo) => {        
    await sflead.clickNew();
    await sflead.clickSalutation("Mr");   
    await sflead.enterLeadDetails(generateRandomData())
    await sflead.clickSave("Button");
    leadName=await sflead.verifyLead();
    console.log(leadName);
   }) 
test(`EditLead lead`, async ({sfeditlead}) => {         
    await sfeditlead.searchLeadName(leadName)
    await sfeditlead.clickOnLead();
    await sfeditlead.clickShowMore();
    await sfeditlead.clickEdit();
    await sfeditlead.enterFirstname(generateRandomData())
    await sfeditlead.clicksaveEdit();
  editedLead=await sfeditlead.verifyEditLead();
 })
 test(`Delete lead`, async ({sfeditlead,sfdellead}) => {         
    await sfdellead.searchtoDeleteLead(editedLead)
    await sfdellead.clickOndelLead();
    await sfeditlead.clickShowMore();
    await sfdellead.clickDeletebutton();
    await sfdellead.clickDeletebutton();
    await sfeditlead.verifyEditLead();   
 })




