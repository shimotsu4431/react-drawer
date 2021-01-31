import clsx from 'clsx'

type Props = {
  openDrawer: boolean
  setOpenDrawer: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer: React.FC<Props> = ({ openDrawer, setOpenDrawer }) => {

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
        <div className={clsx({
        "overlay": true,
        "isShow": openDrawer
       })}></div>
    </>
  )
}

export default Drawer
