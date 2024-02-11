import { PropsWithChildren } from 'react'

function DesktopSheet({ children }: PropsWithChildren) {
    return (
        <div className="p-8 bottom-8 left-8 right-8 h-2/5 bg-white absolute rounded-lg overflow-hidden">
            {children}
        </div>
    )
}

export default DesktopSheet
