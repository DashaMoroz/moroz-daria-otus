import React from 'react'
import FilterLink from '../containers/FilterLink'
import { VisibilityFilters } from '../actions'

const Footer = () => (
    <div>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>
            показать
        </FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>
            скрыть
        </FilterLink>
    </div>
)

export default Footer;
