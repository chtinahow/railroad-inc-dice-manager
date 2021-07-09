import 'core-js/stable'
import 'regenerator-runtime/runtime'
import { registerHtml, start, useEffect, useGlobalStore } from 'tram-one'
import AppHeader from './app-header'
import AppSummary from './app-summary'
import appTaskDescription from './app-task-description'
import AppTaskList from './app-task-list'
import RegularDice from './regular-dice'
import RoundRows from './round-rows'
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
	'round-rows': RoundRows,
})

const home = () => {
	// diceType will be from 15 different types
	const regularDice = useGlobalStore('regularDice', [
		{ diceType: 1, used: false },
		{ diceType: 2, used: false },
		{ diceType: 3, used: false },
		{ diceType: 4, used: false },
		{ diceType: 5, used: false },
		{ diceType: 6, used: false },
		{ diceType: 7, used: false },
		{ diceType: 8, used: false },
		{ diceType: 9, used: false },
		{ diceType: 10, used: false },
		{ diceType: 11, used: false },
		{ diceType: 12, used: false },
		{ diceType: 13, used: false },
		{ diceType: 14, used: false },
		{ diceType: 15, used: false }
	])

	const dicePerRound = useGlobalStore('dicePerRound', [
		{ diceRound: 1, diceType: 10, used: true },
		{ diceRound: 1, diceType: 11, used: true }
	])

	const selectedRound = useGlobalStore('selectedRound', { round: 1 })


	const dicePicker = regularDice.map(singleDice => {
		const addToRound = () => {
			const clickedDiceType = singleDice.diceType
			dicePerRound.push({ diceRound: selectedRound.round, diceType: clickedDiceType, used: false })
		}

		return html`
			<regular-dice diceType=${singleDice.diceType} ${singleDice.used ? 'used' : '' } onclick=${addToRound} />
		`
	})

	return html`
		<main>
			<app-header>railroad-inc-manager</app-header>
			<hr />
			${dicePicker}
			<round-rows></round-rows>
		</main>
	`
}

// start the app on a div with id="app"
start(home, '#app')
