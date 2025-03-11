import classNames from 'classnames';

export const TableHead = ({
  fields,
  fieldToSort,
  fieldOrderReversed,
  onHeadFieldClick,
}) => (
  <thead>
    <tr>
      {fields.map(field => {
        const fieldName = field.name.toLowerCase();
        const isSelected = fieldName === fieldToSort;

        return (
          <th key={field.id}>
            <span className="is-flex is-flex-wrap-nowrap">
              {field.name}
              <a href="#/" onClick={() => onHeadFieldClick(fieldName)}>
                <span className="icon">
                  <i
                    data-cy="SortIcon"
                    className={classNames('fas', {
                      'fa-sort': !isSelected,
                      'fa-sort-up': isSelected && !fieldOrderReversed,
                      'fa-sort-down': isSelected && fieldOrderReversed,
                    })}
                  />
                </span>
              </a>
            </span>
          </th>
        );
      })}
    </tr>
  </thead>
);
