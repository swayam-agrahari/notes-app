import React from 'react'
import {Link} from 'react-router-dom'

let get_Title = (note) => {
  let title = note.body.split('\n')[0]
  if(title.length > 45) {
    return title.slice(0,45)+"..."
  }
  return title
}

// let get_Content = (note) => {
//   let title = get_Title(note)
//   let content = note.body.replaceAll('\n', " ")
//   content = content.replaceAll(title,"")
//   if(content.length > 45){
//     return content.slice(0,45) + "..."
//   }
//   else{
//     return content}
// }

let get_Time = (note) =>{
  return new Date(note.created).toLocaleDateString()
}

const ListItem = ({note}) => {
  return (
    <Link to={`/note/${note.id}`}>
      <div className='notes-list-item'>
      <h3>{get_Title(note)}</h3>
      <p><span>{get_Time(note)}</span></p>
      </div>
    </Link>
  )
}

export default ListItem
