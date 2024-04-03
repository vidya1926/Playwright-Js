import  { test,expect} from '../customFixtures';
//import { loginFunctionality } from "../pages/loginpage";

    test(`Login to SF`,async({sflogin})=>{     
      await sflogin.getTitle();
    })

