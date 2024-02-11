import { PropsWithChildren } from 'react'

function MobileSheet({ children }: PropsWithChildren) {
    return (
        <div className="bottom-0 left-0 right-0 h-2/5 bg-white absolute rounded-lg">
            Mobile
            {children}
        </div>
    )
}

export default MobileSheet
