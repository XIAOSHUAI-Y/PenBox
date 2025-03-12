import { useState } from 'react'
import Button, { ButtonSize, ButtonType } from './components/Button/button'


function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <span>hhhhh</span>
      <Button> Button </Button>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large}> Button </Button>
      <Button btnType={ButtonType.Danger} size={ButtonSize.Small}> Button </Button>
      <Button btnType={ButtonType.Default} size={ButtonSize.Large} disabled> Button </Button>
      <Button btnType={ButtonType.Link} href='https://www.baidu.com'> Baidu </Button>
    </>
  )
}

export default App
