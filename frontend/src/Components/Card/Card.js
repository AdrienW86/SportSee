import './card.css'

function Card(props) {
  
  return (
    <div className='stats'>
       <img 
          className='img-card'
          src={props.cover} 
          alt='item'
        /> 
       <div className='card-content'>
            <p className='card-value'>
               {props.number} 
            </p>
           <p className='unite'> 
                {props.unit}
           </p>
       </div>
    </div>
  )
}
export default Card