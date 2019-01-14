import React from 'react'

import specs from '../../products/vigas'

const VigasTable = () => {
	const specsTable = specs.map((row, trk) => {
		const th = Object.values(row).map((val, thk) => <th key={thk}>{val}</th>)
		return <tr key={trk}>{th}</tr>
	})

	return (
		<div className="spec-block">
			<h2>Caractéristicas</h2>
			<table className="specs-table">
				<thead>
					<tr>
						<th colspan="4">Dimensión</th>
					</tr>
					<tr>
						<th colspan="2">Nominal</th>
						<th colspan="2">Neto</th>
					</tr>
					<tr>
						<th>Pul</th>
						<th>Pul</th>
						<th>cm</th>
						<th>cm</th>
					</tr>
					<tr>
						<th>B</th>
						<th>H</th>
						<th>B</th>
						<th>H</th>
					</tr>
				</thead>
				<tbody>{specsTable}</tbody>
			</table>
		</div>
	)
}

export default VigasTable
