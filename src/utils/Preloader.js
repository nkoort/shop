import s from '../App.module.css'

const preloadreLogo =
  'https://static.wixstatic.com/media/5a0bfe_dbd71c8c517c4d74a259ca710f1b7438~mv2.gif'

const PreloaderBig = (props) => {
  return (
    <div className={s.preloader}>
      <img src={preloadreLogo} />
    </div>
  )
}

export default PreloaderBig
