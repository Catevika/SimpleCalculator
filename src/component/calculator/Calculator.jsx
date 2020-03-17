import React, { Fragment, useState } from 'react';
import Alert from '../alert/Alert';
import { evaluate } from 'mathjs';
import { Big } from 'big.js';

import {
	digitType,
	operatorType,
	digitName,
	operatorName
} from '../buttons/utils';
import './Calculator.scss';

const Calculator = () => {
	// expression state before evaluation
	const [expression, setExpression] = useState('');

	// evaluation state
	const [result, setResult] = useState(0);

	// memory used to deal with decimals
	const [memoryvalue, setmemoryvalue] = useState(null);

	// alert divide by 0 not allowed
	const [alertDisplay, setAlertDisplay] = useState(false);

	const handleClick = e => {
		e.preventDefault();
		// calculator key value to expression
		let value = e.target.value;

		// expression previous value
		let previousValue = expression[expression.length - 1];

		// starting calculation with multiple 0 not allowed
		if (expression === '' && value === '0') {
			return expression;
		}

		// starting calculation with 0 after clearAll not allowed
		if (expression === 0 && value !== '0') {
			setExpression(expression.toString().replace(expression, '') + value);
			setResult(value);
		}

		// if one dot, decimal allowed
		if (
			expression !== 0 &&
			expression !== '0' &&
			previousValue !== '.' &&
			value === '.'
		) {
			setExpression(expression + value);
			setResult(value);
			setmemoryvalue(1);
		}

		// two dots for one decimal not allowed
		if (
			expression !== 0 &&
			expression !== '0' &&
			memoryvalue === 1 &&
			value === '.'
		) {
			setExpression(expression + value.replace(value, ''));
		}

		// update of expression with a decimal & operator before any evaluation
		if (
			expression !== 0 &&
			expression !== '0' &&
			value !== '=' &&
			value !== '.' &&
			(value === '/' || value === '*' || value === '+' || value === '-')
		) {
			setExpression(expression + value);
			setResult(value);
			setmemoryvalue(0);
		}

		// expression update with key value before any evaluation
		if (
			expression !== 0 &&
			expression !== '0' &&
			value !== '=' &&
			value !== '.'
		) {
			setExpression(expression + value);
			setResult(value);
		}

		// divide by 0 not allowed + respective alert
		if (
			expression !== 0 &&
			expression !== '0' &&
			previousValue === '/' &&
			value === '0'
		) {
			setExpression(expression + value.replace(value, ''));
			setResult(value);
			setAlertDisplay(true);
			setTimeout(() => {
				setAlertDisplay(false);
			}, 3000);
		}

		// equals sign cannot follow an operator
		if (
			expression !== 0 &&
			expression !== '0' &&
			(previousValue === '/' ||
				previousValue === '*' ||
				previousValue === '+' ||
				previousValue === '-') &&
			value === '='
		) {
			return expression.replace(previousValue, '');
		}

		// last operator replaces previous operator
		if (
			expression !== 0 &&
			expression !== '0' &&
			value !== '=' &&
			value !== '.' &&
			(previousValue === '/' ||
				previousValue === '*' ||
				previousValue === '+') &&
			(value === '/' || value === '*' || value === '+')
		) {
			setExpression(expression.replace(previousValue, '') + value);
			setResult(value);
		}

		// expression update with result after evaluation
		if (
			expression !== 0 &&
			expression !== '0' &&
			(previousValue !== '/' ||
				previousValue !== '*' ||
				previousValue !== '+' ||
				previousValue !== '-') &&
			value === '='
		) {
			setExpression((Big(evaluate(expression)).toFixed(4) * 1).toString());
			setResult((Big(evaluate(expression)).toFixed(4) * 1).toString());
		}
	};

	const handleClearAll = () => {
		setExpression(0);
		setResult(0);
		setmemoryvalue(0);
	};

	const handleClearEntry = () => {
		let previousValue = expression[expression.length - 1];
		if (expression[expression.length - 2] === '-') {
			previousValue = previousValue * -1;
		}
		setExpression(expression.replace(previousValue, ''));
		setResult(0);
	};

	return (
		<Fragment>
			<input
				id='display'
				className='expression'
				readOnly
				value={expression}
				placeholder='0'
			/>
			<input className='result' readOnly value={result} placeholder='0' />
			<div className='buttons-container'>
				<div className='clear-buttons'>
					<button
						id='clear'
						className='button'
						type='clear-all'
						value='AC'
						onClick={handleClearAll}
					>
						AC
					</button>
					<button
						id='clear-entry'
						className='button'
						type='clear-entry'
						value='C'
						onClick={handleClearEntry}
					>
						C
					</button>
				</div>
				<div className='digits'>
					{digitType &&
						digitType.map((digitValue, digitId) => (
							<button
								id={digitName[digitId]}
								className='button'
								key={digitId}
								type='digitType'
								value={digitValue}
								onClick={handleClick}
							>
								{digitValue}
							</button>
						))}
				</div>
				<div className='operators'>
					{operatorType &&
						operatorType.map((operatorValue, operatorId) => (
							<button
								id={operatorName[operatorId]}
								className='button'
								key={operatorId}
								type='operatorType'
								value={operatorValue}
								onClick={handleClick}
							>
								{operatorValue}
							</button>
						))}
				</div>
				<button
					id='equals'
					className='button'
					type='equalsign'
					value='='
					onClick={handleClick}
					memoryvalue={memoryvalue}
				>
					=
				</button>
				{alertDisplay ? <Alert message='Divide by 0 is not possible' /> : null}
			</div>
		</Fragment>
	);
};

export default Calculator;
