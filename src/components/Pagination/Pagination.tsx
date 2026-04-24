import classNames from 'classnames';
import React from 'react';

type Props = {
  total: number;
  perPage: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
};

export const Pagination: React.FC<Props> = ({
  total,
  perPage,
  currentPage = 1,
  onPageChange,
}) => {
  const countPage = Math.ceil(total / perPage);

  const disabledPrevLink = currentPage === 1;
  const disabledNextLink = currentPage === countPage;

  return (
    <ul className="pagination">
      <li className={classNames('page-item', { disabled: disabledPrevLink })}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#"
          aria-disabled={disabledPrevLink}
          onClick={event => {
            event.preventDefault();
            if (!disabledPrevLink) {
              onPageChange(currentPage - 1);
            }
          }}
        >
          «
        </a>
      </li>
      {Array.from({ length: countPage }, (_, index) => {
        const count = index + 1;

        return (
          <li
            className={classNames('page-item', {
              active: currentPage === count,
            })}
            key={count}
          >
            <a
              data-cy="pageLink"
              className="page-link"
              href="#"
              onClick={event => {
                event.preventDefault();
                onPageChange(count);
              }}
            >
              {count}
            </a>
          </li>
        );
      })}
      <li className={classNames('page-item', { disabled: disabledNextLink })}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={disabledNextLink}
          onClick={event => {
            event.preventDefault();
            if (disabledNextLink) {
              return;
            }

            onPageChange(currentPage + 1);
          }}
        >
          »
        </a>
      </li>
      {/* <li className="page-item active">
        <a data-cy="pageLink" className="page-link" href="#1">
          1
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#2">
          2
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#3">
          3
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#4">
          4
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#5">
          5
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#6">
          6
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#7">
          7
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#8">
          8
        </a>
      </li>
      <li className="page-item">
        <a data-cy="pageLink" className="page-link" href="#9">
          9
        </a>
      </li>
      <li className="page-item">
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled="false"
        >
          »
        </a>
      </li> */}
    </ul>
  );
};
