//import styles from './CancelButton.module.css';


const CancelButton = () => {
  const styles = {
  backgroundColor: "hsl(200, 100%, 50%)",
  color: "white",
  padding: "10px 20px",
  margin: "10px",
  borderRadius: "5px",
  border: "none",
  cursor: "pointer",
  }
	return (
		<div>
			<button style={styles}>CancelButton</button>
		</div>
	);
};

export default CancelButton;
