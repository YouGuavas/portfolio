import Story from '@/components/Story';

export default function page() {
	return (
		<section
			className={`pad-top-vh my-background-generic text-center my-text-mustard`}
		>
			<Story title="Starter's Story" paragraphs={['A story']} />
		</section>
	);
}
