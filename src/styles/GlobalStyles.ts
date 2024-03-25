import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
        list-style: none;
    }

    :root{
        --brand1: #623CEA;
        --brand2: #311E75;
        --brand3: #040c30;
        --grey0: #0B0D0D;
        --grey1: #121214;
        --grey2: #212529;
        --grey3: #868E96;
        --grey4: #ADB5BD;
        --grey5: #CED4DA;
        --grey6: #DEE2E6;
        --grey7: #E9ECEF;
        --grey8: #F1F3F5;
        --grey9: #F8F9FA;
        --grey10: #FDFDFD;
        --whiteFixed: #FFFFFF;

        --alert1: #CD2B31;
        --alert2: #FDD8D8;
        --alert3: #FFE5E5;
        
        --success1: #18794E;
        --success2: #CCEBD7;
        --success3: #DDF3E4;

        --random1: #E34D8C;
        --random2:#C04277;
        --random3: #7D2A4D;
        --random4: #7000FF;
        --random5: #6200E3;
        --random6: #36007D;
        --random7: #349974;
        --random8: #2A7D5F;
        --random9: #153D2E;
        --random10: #6100FF;
        --random11: #5700E3;
        --random12: #30007D; 
    }
    body{
        min-height: 100vh;
        background-color: var(--grey1);
    }

    button {
        cursor: pointer;
        transition: 0.5s;

        &:hover {
            transition: 0.5s;
        }
    }

    a {
        text-decoration: none;
    }

 

`;
