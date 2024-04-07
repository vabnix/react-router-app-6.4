import { Link } from 'react-router-dom'

export default function CareerNotFound() {
  return (
    <div className='career-not-found'>
       <h2>Job ID you are looking for cannot be found or No longer active!</h2>
      
      <p>Lets go to Careers homepage <Link to='/careers'>Go Back</Link></p>
    </div>
  )
}
