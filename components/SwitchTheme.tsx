import styles from './styles/switchTheme.module.scss'

export default function SwitchTheme() {
  const setTheme = (newTheme: string) => {
    const theme = !(newTheme === 'dark' || newTheme === 'light') ? 'light' : newTheme
    document.documentElement.setAttribute('data-theme', theme)
    window.localStorage.setItem('theme', theme)
  }
  const getTheme = () => {
    const currentTheme = window.localStorage.getItem('theme')
    if (currentTheme) return currentTheme
    const query = window.matchMedia('(prefers-color-scheme: dark)')
    return (query.matches ? 'dark' : 'light')
  }
  const changeTheme = () => {
    const currentTheme = getTheme()
    const newTheme = (currentTheme === 'dark') ? 'light' : 'dark'
    setTheme(newTheme)
  }

  const currentTheme = getTheme()
  setTheme(currentTheme)

  return (
    <span onClick={changeTheme} className={styles.switchButton}>
      <svg className={styles.sunny} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z"/>
      </svg>
      <svg className={styles.moon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="18px" height="18px"><path d="M0 0h24v24H0V0z" fill="none"/>
        <path d="M10 4c4.41 0 8 3.59 8 8s-3.59 8-8 8c-.34 0-.68-.02-1.01-.07C10.9 17.77 12 14.95 12 12s-1.1-5.77-3.01-7.93C9.32 4.02 9.66 4 10 4m0-2c-1.82 0-3.53.5-5 1.35C7.99 5.08 10 8.3 10 12s-2.01 6.92-5 8.65C6.47 21.5 8.18 22 10 22c5.52 0 10-4.48 10-10S15.52 2 10 2z"/>
      </svg>
    </span>
  )

}