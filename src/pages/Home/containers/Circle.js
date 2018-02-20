import { connect } from 'react-redux'

import { enterCircle, leaveCircle, selectColor } from '../actions'
import Circle from '../components/Circle'

const mapDispatchToProps = (dispatch) => ({
  onMouseOver: color => dispatch(enterCircle(color)),
  onMouseOut: () => dispatch(leaveCircle()),
  onClick: color => dispatch(selectColor(color))
})

export default connect(null, mapDispatchToProps)(Circle)
