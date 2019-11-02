import 'bootstrap';
import { setNavbar } from './navbar';
import { setDurationText, setDescriptionText, setConstraintText } from './detail'

const apiEndpoint = "https://panjs.com/ywc.json";

fetch(apiEndpoint).then(
    (apidata) => apidata.json()
).then(
    (jsondata) => {
        setNavbar(jsondata.navbarItems);
        setDurationText(jsondata.duration);
        setDescriptionText(jsondata.detail);
        setConstraintText(jsondata.condition);
    }
);
// async function getData() {
//     const data = await fetch(apiEndpoint);
//     const jsondata = await data.json();
//     console.log(jsondata);
// }

// getData();