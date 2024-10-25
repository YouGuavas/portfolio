import BlogPost from '../../experimental/components/BlogPost';
import ByLine from '../../experimental/components/ByLine';

export default function () {
	return (
		<BlogPost title="My First Blog Post">
			<h1 className="my-title">My First Blog Post</h1>
			<ByLine by="Patrick Yambrick" date="Wednesday, July 13, 2022" />
			This is my post
		</BlogPost>
	);
}
