export default function Story(props) {
	return (
		<>
			<h1>{props.title}</h1>
			<div>
				{props.paragraphs.map((text, index) => {
					return <p key={index}>{text}</p>;
				})}
			</div>
		</>
	);
}
