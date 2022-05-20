import React from 'react'

export default function Alart(props) {
  return (
    <div style={{height:'50px'}}>
  { props.alart && <div class="alert alert-info" role="alert">
 <strong>{props.alart.type}</strong> : {props.alart.mes}
</div>}
</div>
  )
}
