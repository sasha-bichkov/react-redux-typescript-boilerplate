import CreatingTasksForm from '@Components/CreatingTasksForm'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'
import { addNewTask } from '@Modules/Tasks/actions'
import { IApplicationState } from '@Root/rootReducer'

function mapStateToProps(state: IApplicationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({
    addNewTask
  }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(CreatingTasksForm))
