import PropTypes from 'prop-types';
import './card.css';

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
Card.propTypes = {
  number : PropTypes.number,
  unit: PropTypes.string
}
export default Card