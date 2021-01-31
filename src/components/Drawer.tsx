import clsx from 'clsx'
import { useCallback, useEffect, useRef } from 'react'

type Props = {
  openDrawer: boolean
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer: React.FC<Props> = ({ openDrawer, setOpenDrawer }) => {
  const overlay = useRef<HTMLDivElement>(null)
  const handleClickOverlay = useCallback(() => {
    setOpenDrawer(false)
  },[setOpenDrawer])

  // Esc キーでモーダルを閉じる
  const escFunction = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpenDrawer(false)
      }
    },
    [setOpenDrawer],
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction, false)
  }, [escFunction])

  return (
    <>
      <div className={clsx({
        "Drawer": true,
        "isShow": openDrawer
        })}>
        <div>
          <button className="DrawerCloseButton" onClick={() => setOpenDrawer(false)}>
            <img  className="DrawerCloseButtonImg" src="../close.svg" alt="閉じる"/>
          </button></div>
        </div>
        <div
          ref={overlay}
          onClick={handleClickOverlay}
          className={clsx({
          "overlay": true,
          "isShow": openDrawer
        })}>
        </div>
    </>
  )
}

export default Drawer
