import React, { Component } from 'react'
import './RollDice.css'
import Die from './Die'

class RollDice extends Component {

	// Números de rosto passam como adereços padrão
	static defaultProps = {
		sides: ['one', 'two', 'three',
			'four', 'five', 'six']
	}
	  
	constructor(props) {
		super(props)

		// estados informações que podem alterar  usando a props fora do constructor
		this.state = {
			die1: 'one',
			rolling: false
		}
		this.roll = this.roll.bind(this)
	}
	roll() {
		const { sides } = this.props
		this.setState({
			// Mudando o estado ao clicar
			die1: sides[Math.floor(Math.random() * sides.length)],
			rolling: true,
		
		})
	
		// Inicia o temporizador de um segundo ao rolar o início
		setTimeout(() => {
			// Configura Rolling para false novamente quando o tempo acabar
			this.setState({ rolling: false })
		}, 1000)
	}

	render() {
		const handleBtn = this.state.rolling ?
			'RollDice-rolling' : ''
		const { die1, rolling } = this.state
		return (
			<div className='RollDice'>
				<div className='RollDice-container'>
					<Die face={die1} rolling={rolling} />
				</div>
				<button className={handleBtn}
					disabled={this.state.rolling}
					onClick={this.roll}>
					{this.state.rolling ? 'Rolling' : 'Roll Dice!'}
				</button>
			</div>
		)
	}
}

export default RollDice
