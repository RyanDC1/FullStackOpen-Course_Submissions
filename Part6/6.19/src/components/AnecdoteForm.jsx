import React from 'react'
import { useDispatch } from 'react-redux'
import { CreateAnecdote } from '../reducers/actions/anecdoteActions'
import { SetNotification } from '../reducers/actions/notificationActions'

const formFields = {
    Anecdote: 'anecdote'
}

export default function AnecdoteForm() {

    const dispatch = useDispatch()

    return (
        <div>
            <h2>Create Anecdote</h2>
            <form onSubmit={createAnecdote}>
                <div>
                    <input name={formFields.Anecdote} />
                </div>
                <button type='submit'>create</button>
            </form>
        </div>
    )

    function createAnecdote(event) {
        event.preventDefault()
        const { [formFields.Anecdote]: anecdote } = event.target

        dispatch(CreateAnecdote(anecdote.value))
        .then(() => {
            anecdote.value = ''
        })
    }
}