import { useEffect, useState } from "react";

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(true);
	//const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			const response = await fetch(url);
			const parsedResposne = await response.json();
			setData(parsedResposne.content);
			setLoading(false);
		}
		fetchData();
		 // eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return { loading, data };
};

export default useFetch;
