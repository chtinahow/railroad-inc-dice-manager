import { registerHtml, useGlobalStore } from 'tram-one'
import RegularDice from './regular-dice'

/**
 * Component that will hold each of the rolled dice for the round
 * Each Row will populate with a maximum of 4 regular dice that are selected from the
 * the dicePicker
 */

const html = registerHtml({
	'regular-dice': RegularDice,
})

export default (props, children) => {
	const selectedRound = useGlobalStore('selectedRound')
	const regularDice = useGlobalStore('regularDice')
	const dicePerRound = useGlobalStore('dicePerRound')

	const selectRound = (roundNumber) => () => {
		selectedRound.round = roundNumber
	};

	const diceForTheRound = (round) => {
		const isDiceForCurrentRound = singleDice => singleDice.diceRound === round
		const diceTypeToRegularDice = (singleDice => {
			const pickDice = () => {
				singleDice.used = !singleDice.used
			}

			return html`
				<regular-dice diceType=${singleDice.diceType} ${singleDice.used ? 'used' : '' } pickDice=${pickDice} />
			`
		})
		return dicePerRound.filter(isDiceForCurrentRound).map(diceTypeToRegularDice)
	}

	return html`
		<div class="round-rows">
			<button class="round-1" onclick=${selectRound(1)}>
				<h2>Round 1</h2>
			</button>
			${diceForTheRound(1)}
			<hr/>
			<button class="round-2" onclick=${selectRound(2)}>
				<h2>Round 2</h2>
			</button>
			${diceForTheRound(2)}
			<hr/>
			<button class="round-3" onclick=${selectRound(3)}>
				<h2>Round 3</h2>
			</button>
			${diceForTheRound(3)}
			<hr/>
			<button class="round-4" onclick=${selectRound(4)}>
			<h2>Round 4</h2>
			</button>
			${diceForTheRound(4)}
			<hr/>
			<button class="round-5" onclick=${selectRound(5)}>
				<h2>Round 5</h2>
			</button>
			${diceForTheRound(5)}
			<hr/>
			<button class="round-6" onclick=${selectRound(6)}>
				<h2>Round 6</h2>
			</button>
			${diceForTheRound(6)}
			<hr/>
			<button class="round-7" onclick=${selectRound(7)}>
				<h2>Round 7</h2>
			</button>
			${diceForTheRound(7)}
			<hr/>
		</div>
	`
}