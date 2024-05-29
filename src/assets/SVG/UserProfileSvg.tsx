import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

function UserProfileSvg() {
  return (
    <Svg
      width={44}
      height={44}
      viewBox="0 0 44 44"
      fill="none"
      
    >
      <Circle cx={22} cy={22} r={22} fill="url(#paint0_linear_359_1104)" />
      <Path
        d="M22 8.666c7.36 0 13.334 5.973 13.334 13.333S29.36 35.333 22 35.333c-7.36 0-13.333-5.974-13.333-13.334C8.667 14.64 14.64 8.666 22 8.666zm-7.969 17.888c1.957 2.921 4.896 4.779 8.182 4.779 3.286 0 6.226-1.858 8.182-4.779a11.957 11.957 0 00-8.182-3.221 11.958 11.958 0 00-8.182 3.221zm7.97-5.888a4 4 0 100-8 4 4 0 000 8z"
        fill="url(#paint1_linear_359_1104)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_359_1104"
          x1={22}
          y1={-7.5}
          x2={22}
          y2={54.5}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#E3F3FF" />
          <Stop offset={0.535} stopColor="#B5E2FF" />
          <Stop offset={1} stopColor="#E3F3FF" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_359_1104"
          x1={22.0003}
          y1={8.66602}
          x2={22.0003}
          y2={35.3327}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#102C7C" />
          <Stop offset={1} stopColor="#245CFF" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default UserProfileSvg
