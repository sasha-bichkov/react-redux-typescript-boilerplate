import React, { FC } from 'react'
import { withTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { Action, bindActionCreators, Dispatch } from 'redux'

import { addNewTask } from '@Modules/Tasks/actions'
import { IApplicationState } from '@Root/rootReducer'
import { ITask } from '@Modules/Tasks/types'
import CreatingTasksForm from '@Components/CreatingTasksForm'

interface ITasksFromContainerProps {
  addNewTask(payload: ITask): void
}

const TasksFromContainer: FC<ITasksFromContainerProps> = ({addNewTask}) => {
  return (
    <CreatingTasksForm addNewTask={addNewTask} />
  )
}

function mapStateToProps(state: IApplicationState) {
  return {}
}

function mapDispatchToProps(dispatch: Dispatch<Action>) {
  return bindActionCreators({
    addNewTask
  }, dispatch)
}

export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(TasksFromContainer))
