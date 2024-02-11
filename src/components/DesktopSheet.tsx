import { PropsWithChildren } from 'react'

function DesktopSheet({ children }: PropsWithChildren) {
    return (
        <div className="bottom-8 left-8 right-8 h-2/5 bg-white absolute rounded-lg">
            Desktop
            {children}
        </div>
    )
}

export default DesktopSheet
