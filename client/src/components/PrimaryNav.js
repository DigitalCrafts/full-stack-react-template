import { Link } from 'react-router-dom'

function PrimaryNav() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default PrimaryNav
