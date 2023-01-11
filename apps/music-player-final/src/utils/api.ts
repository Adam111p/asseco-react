export const buildUrl = (endpoint: string): string => {
  console.log(process.env);

  return `${process.env.REACT_APP_API_URI}${endpoint}`
}
