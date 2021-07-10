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
	const dicePerRound = useGlobalStore('dicePerRound')
	const isSelectedRound = selectedRound.round === props.round

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
				<regular-dice diceType=${singleDice.diceType} ${singleDice.used ? 'used' : '' } onclick=${pickDice} />
			`
		})
		return dicePerRound.filter(isDiceForCurrentRound).map(diceTypeToRegularDice)
	}

	return html`
		<button class="round-row round-${props.round} ${isSelectedRound ? 'selected-round' : ''}" onclick=${selectRound(props.round)}>
			<h2 class="round-name">Round ${props.round}</h2>
			${diceForTheRound(props.round)}
		</button>
	`
}