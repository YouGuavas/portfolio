import { useState, useContext, createContext } from 'react';
import { MyContext } from '@/components/Layout';
export const BlogContext = createContext();

export default function BlogPost({ children }) {
	const { theme, setTheme } = useContext(MyContext);
	const [variant, setVariant] = useState(['variant', [0]]);
	return (
		<BlogContext.Provider value={{ variant, setVariant, theme, setTheme }}>
			{children}
		</BlogContext.Provider>
	);
}
