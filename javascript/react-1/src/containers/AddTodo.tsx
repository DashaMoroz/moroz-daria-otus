import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import VisibleTodoList from '../containers/VisibleTodoList'
let city_list: string[] = [];

const AddTodo = ( props: any) => {
    return (
        <div>
            <form onSubmit={e => {
                e.preventDefault()
                if (!props.city) {
                    return
                }
                if (!city_list.includes(props.city)) {
                    city_list.push(props.city);
                    props.dispatch(addTodo(props.city))
                }
            }}>
                <div className="input-group mb-3">
                    <button type="submit" className="btn btn-outline-success" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">в избранное</button>
                </div>

            </form>

        </div>
    )
}

export default connect()(AddTodo)
