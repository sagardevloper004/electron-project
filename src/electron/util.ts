export const isDevMode = ():boolean => {
  return process.env.NODE_ENV === 'development';
}