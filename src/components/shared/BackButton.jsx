export default function BackButton({ history }) {
  return (
    <button className="back-button button" onClick={() => history.goBack()}>
      Back
    </button>
  );
}
