import { useWindowSize } from 'react-use'
import DesktopSheet from './DesktopSheet'
import MobileSheet from './MobileSheet'
import Content from './Content'

const MOBILE_WIDTH = 600

function Swither() {
    const { width } = useWindowSize()
    const isMobile = MOBILE_WIDTH > width

    if (isMobile) {
        return (
            <MobileSheet>
                <Content />
            </MobileSheet>
        )
    }

    return (
        <DesktopSheet>
            <Content />
        </DesktopSheet>
    )
}

export default Swither
