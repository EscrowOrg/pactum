// eslint-disable-next-line eqeqeq
export const isEmpty = (data) => typeof data === 'object' ? Object.keys(data || {}).length == 0 : !Boolean(data);