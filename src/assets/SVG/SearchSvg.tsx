import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SearchSvg() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
    
    >
      <Path
        d="M7 3v3H3v2h4v3h2V3H7zm4 5h10V6H11v2zm6 5v3h4v2h-4v3h-2v-8h2zm-4 5H3v-2h10v2z"
        fill="#1F4CD0"
      />
    </Svg>
  )
}

export default SearchSvg