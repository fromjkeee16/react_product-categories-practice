import { TableHead } from './TableHead';
import { TableRow } from './TableRow';

export const ProductTable = ({
  products,
  headFields,
  onHeadFieldClick,
  fieldToSort,
  fieldOrderReversed,
}) => (
  <table
    data-cy="ProductTable"
    className="table is-striped is-narrow is-fullwidth"
  >
    <TableHead
      fields={headFields}
      fieldToSort={fieldToSort}
      fieldOrderReversed={fieldOrderReversed}
      onHeadFieldClick={onHeadFieldClick}
    />
    <tbody>
      {products.map(product => (
        <TableRow product={product} key={product.id} />
      ))}
    </tbody>
  </table>
);
