import { Controller } from 'cerebral'
import Devtools from 'cerebral/devtools'
import app from './app/rootModule'
import * as actions from './app/actions'

const controller = Controller(app, {
    devtools: Devtools({ host: 'localhost:8686' })
})

controller.runSignal('getInitial', [actions.clearEntries, actions.getData], {});

export default controller