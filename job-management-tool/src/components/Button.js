import { Spinner } from "react-bootstrap"
import {Button} from "react-bootstrap"

const LoadingButton = ({ onSubmit, text, loading, disabled }) => {
  return (
    <Button className="submit-btn" onClick={onSubmit} disabled={disabled}>
      {!loading ? text : <Spinner/>}
    </Button>
  )
}
  
export default LoadingButton