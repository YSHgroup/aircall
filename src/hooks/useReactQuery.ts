import { useQuery, useMutation } from '@tanstack/react-query';

export const useFetching = () => {
	return useQuery({
		queryKey: ['activities'],
		queryFn: () =>
			fetch('https://charming-bat-singlet.cyclic.app/https://cerulean-marlin-wig.cyclic.app/')
				.then((res) => res.json())
				.catch((err) => {
					throw new Error(err);
				}),
        staleTime: 10* 60 * 1000,
        retry: 3
	});
};
