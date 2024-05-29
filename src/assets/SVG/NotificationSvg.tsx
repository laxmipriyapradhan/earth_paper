import * as React from "react"
import Svg, { Rect, Path } from "react-native-svg"

function NotificationSvg() {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
    
    >
      <Rect width={40} height={40} rx={20} fill="#1941B3" />
      <Path
        d="M24.941 17.698c0-2.775-2.212-5.024-4.941-5.024-2.729 0-4.941 2.25-4.941 5.024v6.697h9.882v-6.697zm1.647 7.255l.33.447c.136.185.1.447-.083.586a.407.407 0 01-.247.084H13.412A.415.415 0 0113 25.65c0-.09.029-.179.082-.251l.33-.447v-7.255c0-3.7 2.95-6.698 6.588-6.698 3.639 0 6.588 2.999 6.588 6.698v7.255zm-8.647 1.954h4.118C22.059 28.063 21.137 29 20 29s-2.059-.937-2.059-2.093z"
        fill="#fff"
      />
    </Svg>
  )
}

export default NotificationSvg
