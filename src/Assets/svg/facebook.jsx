import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

function Facebook(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_6_582)">
        <Path
          d="M18.108 8.572h-4.395V6.43s-.246-2.037 1.178-2.037h2.896V0h-4.93S8.732-.018 8.732 4.125c0 .89-.004 2.51-.01 4.447h-2.83v3.537h2.823L8.679 24h5.034V12.11h3.323l1.072-3.538z"
          fill="#4267B2"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_6_582">
          <Path fill="#fff" d="M0 0H24V24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  )
}

export default Facebook
