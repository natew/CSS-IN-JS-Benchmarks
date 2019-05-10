import { gloss } from 'gloss'
import React from 'react'

const Table = gloss({
  display: 'table',
  marginTop: 10,
})

const Row = gloss({
  display: 'table-row',
})

const Cell = gloss({
  display: 'table-cell',
  padding: 10,
}).theme((_, props) => ({
  background: `rgba(74, 174, 53, ${props.value})`
}))

export default ({ table, toPercent }) => (
  <Table>
    {table.map((row, i) => (
      <Row key={i}>
        {row.map((x, j) => (
          <Cell key={`${i}${j}`} value={x}>{toPercent(x)}</Cell>
        ))}
      </Row>
    ))}
  </Table>
);

export default Table;
