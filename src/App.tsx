import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/Menu/menu'
import MenuItem from './components/Menu/menuItem'
import SubMenu from './components/Menu/subMenu'
import Icon from './components/Icon/icon'
import Button from './components/Button/button'
import { useRef, useState } from 'react'
import Transition from './components/Transition/transition'

library.add(fas)

function App() {
  const [show, setShow] = useState(false)
  const nodeRef1 = useRef(null)
  const nodeRef2 = useRef(null)
  return (
    <>
      {/* <Icon icon="coffee" theme='danger' size='10x'/> */}
      <Menu defaultIndex='0' onSelect={(index) => {alert(index)}}>
        <MenuItem>
          cool link
        </MenuItem>
        <MenuItem disabled>
          cool link 2
        </MenuItem>
        <SubMenu title='dropdown'>
          <MenuItem>
            dropdown1
          </MenuItem>
          <MenuItem>
            dropdown2
          </MenuItem>
        </SubMenu>
        <MenuItem>
          cool link 3
        </MenuItem>
      </Menu>
      <Button size="lg" onClick={() => { setShow(!show)}}>Toggle</Button>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-top"
        unmountOnExit
        nodeRef={nodeRef1}
      >
        <div ref={nodeRef1}>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
        </div>
      </Transition>
      <Transition
        in={show}
        timeout={300}
        animation="zoom-in-left"
        unmountOnExit
        nodeRef={nodeRef2}
      >
        <div ref={nodeRef2}><Button btnType="primary" size="lg">a large Button</Button></div>
      </Transition>
    </>
  )
}

export default App
