export const ResetFiltersButton = ({ handler, children }) => (
  <div className="panel-block">
    <a
      data-cy="ResetAllButton"
      href="#/"
      className="button is-link is-outlined is-fullwidth"
      onClick={handler}
    >
      {children || 'Reset'}
    </a>
  </div>
);
