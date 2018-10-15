import Vue from "vue";
import {
  Button,
  Container,
  Header,
  Aside,
  Main,
  Footer,
  Form,
  FormItem,
  Input,
  Icon,
  Alert,
  Notification,
  Row,
  Col,
  Card,
  Radio,
  RadioGroup,
  RadioButton
} from "element-ui";

Vue.use(Button);
Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Aside);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Icon);
Vue.use(Alert);
Vue.use(Row);
Vue.use(Col);
Vue.use(Card);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);

Vue.prototype.$notify = Notification;
