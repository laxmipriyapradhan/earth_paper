import * as React from "react"
import Svg, { Circle, Path } from "react-native-svg"

function CreateproposalSvg() {
  return (
    <Svg
      width={36}
      height={36}
      viewBox="0 0 36 36"
      fill="none"
      
    >
      <Circle cx={18} cy={18} r={18} fill="#F4F5F7" />
      <Path
        d="M20.25 12h-7.5v12h10.5v-9h-3v-3zm-9-.756c0-.411.336-.744.749-.744H21l3.75 3.75v10.494a.75.75 0 01-.745.756h-12.01a.75.75 0 01-.745-.744V11.244zm6 6.006V15h1.5v2.25H21v1.5h-2.25V21h-1.5v-2.25H15v-1.5h2.25z"
        fill="#1F4CD0"
      />
    </Svg>
  )
}

export default CreateproposalSvg
