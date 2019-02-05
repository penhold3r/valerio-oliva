import React from 'react'

import specs from '../data/vigas'

const VigasTable = () => {
	const specsTable = specs.map((row, trk) => {
		const td = Object.values(row).map((val, thk) => <td key={thk}>{val}</td>)
		return <tr key={trk}>{td}</tr>
	})

	return (
		<div className="table-wrapper">
			<table className="specs-table">
				<thead>
					<tr>
						<th colSpan="4">Dimensión</th>
					</tr>
					<tr>
						<th colSpan="2">Nominal</th>
						<th colSpan="2">Neto</th>
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
