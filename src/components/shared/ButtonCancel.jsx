// NPM packages
import { useHistory } from "react-router-dom";

export default function ButtonCancel({ message }) {
  // Global state
  const history = useHistory();

  //Methods
  function cancelEdit() {
    if (window.confirm(message)) {
      history.goBack();
    }
  }

  return (
    <button className="button cancel-button" onClick={cancelEdit}>
      Cancel
    </button>
  );
}
