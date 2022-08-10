import React, { FC } from 'react'
import { TodoType } from './types/todo';

// export const Todo = (
//     // props: Pick<TodoType, 'userId' | 'title' | 'completed'>
//     props: Omit<TodoType, 'id'>
// ) => {
//     const { title, userId, completed } = props;
//     const completeMark = completed ? '[完]' : '[未]'

//     return (
//       <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>
//   )
// }


export const Todo: FC<Omit<TodoType, 'id'>> = (props) => {
    const { title, userId, completed } = props;
    const completeMark = completed ? '[完]' : '[未]'

    return (
      <p>{`${completeMark}${title}(ユーザー:${userId})`}</p>
  )
}