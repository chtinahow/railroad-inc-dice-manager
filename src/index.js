import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect, useGlobalStore } from 'tram-one'
import AppHeader from './app-header'
import AppSummary from './app-summary'
import appTaskDescription from './app-task-description'
import AppTaskList from './app-task-list'
import RegularDice from './regular-dice'
import './styles.css'

/**
 * The entry point of the app, and where we mount the app on the DOM.
 * Read more about it here: https://tram-one.io/#components
 */

const html = registerHtml({
	'app-header': AppHeader,
	'app-summary': AppSummary,
	'app-task-list': AppTaskList,
	'app-task-description': appTaskDescription,
	'regular-dice': RegularDice,
})

const home = () => {
	// diceType will be from 15 different types
	const regularDice = useGlobalStore('regularDice', [
		{ diceType: 1, used: false },
		{ diceType: 12, used: false },
		{ diceType: 12, used: false },
		{ diceType: 4, used: false }
	])

	const currentDice = regularDice.map(singleDice => {
		const toggleUsed = () => {
			singleDice.used = !singleDice.used
		}

		return html`
			<regular-dice diceType=${singleDice.diceType} ${singleDice.used ? 'used' : '' } useDice=${toggleUsed} />
		`
	})

	return html`
		<main>
			<app-header>railroad-inc-manager</app-header>
			<hr />
			${currentDice}
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
