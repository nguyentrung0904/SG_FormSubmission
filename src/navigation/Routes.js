import n from './RouteNames'
import { StackNavigator} from 'react-navigation'
import FormMenuScreen from '../containers/forms-menu/FormMenu.Screen'
import MovingFormScreen from '../containers/moving-form/MovingForm.Screen'
import ThankyouScreen from '../containers/thankyou-submission/Thankyou.Screen'
import SubmissionHistoryScreen from '../containers/submission-history/SubmissionHistory.Screen'

export default StackNavigator({
  [n.FORM_MENU]: {screen: FormMenuScreen},
  [n.MOVING]: {screen: MovingFormScreen},
  [n.THANK_YOU]: {screen: ThankyouScreen},
  [n.SUBMISSION_HISTORY]: {screen: SubmissionHistoryScreen},
}, {
  initialRouteName: n.FORM_MENU
})