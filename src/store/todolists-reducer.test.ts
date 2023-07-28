import { v1 } from 'uuid'
import { FilterType, TodolistType } from '../App'
import {
  addTodolistAC,
  changeTodolistFilterAC,
  changeTodolistTitleAC,
  removeTodolistAC,
  todolistsReducer,
} from './todolists-reducer'

test('correct todolist should be removed', () => {
  const todolistID1 = v1()
  const todolistID2 = v1()

  const startState: TodolistType[] = [
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]
  const action = removeTodolistAC(todolistID1)
  const endState = todolistsReducer(startState, action)

  expect(endState.length).toBe(1)
  expect(endState[0].id).toBe(todolistID2)
})

test('correct todolist should be added', () => {
  const todolistID1 = v1()
  const todolistID2 = v1()
  const newTodolistTitle = 'New Todolist'
  const startState: TodolistType[] = [
    { id: todolistID1, title: 'What to learn', filter: 'all' },
    { id: todolistID2, title: 'What to buy', filter: 'all' },
  ]
  const action = addTodolistAC(newTodolistTitle)
  const endState = todolistsReducer(startState, action)

  expect(endState.length).toBe(3)
  expect(endState[0].title).toBe(newTodolistTitle)
})

test('correct todolist should change its name', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newTodolistTitle = 'New Todolist'

  const startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ]
  const action = changeTodolistTitleAC(todolistId2, newTodolistTitle)
  const endState = todolistsReducer(startState, action)

  expect(endState[0].title).toBe('What to learn')
  expect(endState[1].title).toBe(newTodolistTitle)
})

test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1()
  let todolistId2 = v1()

  let newFilter: FilterType = 'completed'

  const startState: Array<TodolistType> = [
    { id: todolistId1, title: 'What to learn', filter: 'all' },
    { id: todolistId2, title: 'What to buy', filter: 'all' },
  ]
  const action = changeTodolistFilterAC(todolistId2, newFilter)
  const endState = todolistsReducer(startState, action)

  expect(endState[0].filter).toBe('all')
  expect(endState[1].filter).toBe(newFilter)
})


