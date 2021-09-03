import { library } from "@fortawesome/fontawesome-svg-core";
import { fas,faSignInAlt,faUserPlus } from '@fortawesome/free-solid-svg-icons';
import {fab, faTwitterSquare, faFacebook, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";


function initFontAwesome() {
    library.add(fab, faTwitterSquare, faFacebook, faLinkedin, faYoutube);
    library.add(fas, faSignInAlt,faUserPlus);
}

export default initFontAwesome;
