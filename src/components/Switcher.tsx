import { useWindowSize } from 'react-use'
import DesktopSheet from './DesktopSheet'
import MobileSheet from './MobileSheet'

const MOBILE_WIDTH = 600

function Swither() {
    const { width } = useWindowSize()
    console.log(width)
    return width > MOBILE_WIDTH ? <DesktopSheet /> : <MobileSheet />
}

export default Swither
