import Menu from './menu'



export default function nav() {
 
    return (
        <header>
            <div className="h-8 m-0 p-0 bg-gradient-to-r from-blue-700 to-blue-400"></div>
              <div className="justify-end">
                  <Menu />
              </div>
        </header>
    )
  }
