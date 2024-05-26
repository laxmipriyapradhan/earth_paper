import * as React from "react"
import Svg, { Path } from "react-native-svg"

function Dropdownarrow() {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
   
    >
      <Path
        d="M12 15l-4.242-4.242 1.414-1.414 2.829 2.828 2.828-2.828 1.414 1.414-4.242 4.243z"
        fill="#303030"
      />
    </Svg>
  )
}

export default Dropdownarrow