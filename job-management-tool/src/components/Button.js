import { Spinner } from "react-bootstrap"
import {Button} from "react-bootstrap"

const LoadingButton = ({ onSubmit, text, loading, disabled }) => {
  return (
    <Button className="loadingButton" onClick={onSubmit} disabled={disabled}>
      {!loading ? text : <Spinner animation="border" size="sm"/>}
    </Button>
  )
}
  
export default LoadingButton