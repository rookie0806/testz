import Reactotron from "reactotron-react-js";
import {reactotronRedux} from "reactotron-redux";

Reactotron.configure({name: "0isohee"})
    .use(reactotronRedux())
    .connect();

export default Reactotron;