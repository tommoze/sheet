import { PropsWithChildren } from 'react'
import { Drawer } from 'vaul'
import { useState } from 'react'

function MobileSheet({ children }: PropsWithChildren) {
    const [snap, setSnap] = useState<number | string | null>(0.2)
    return (
        <Drawer.Root
            open
            snapPoints={[0.2, 0.5, 1]}
            activeSnapPoint={snap}
            setActiveSnapPoint={setSnap}
            dismissible={false}
        >
            <Drawer.Portal>
                <Drawer.Content className="p-8 outline-none fixed flex flex-col bg-white border border-gray-200 border-b-none rounded-t-[10px] bottom-0 left-0 right-0 h-full max-h-[97%] mx-[-1px]">
                    {children}
                </Drawer.Content>
                <Drawer.Overlay />
            </Drawer.Portal>
        </Drawer.Root>
    )
}

export default MobileSheet
