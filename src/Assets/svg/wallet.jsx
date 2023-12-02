import * as React from "react"
import Svg, { Path } from "react-native-svg"
function Wallet(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M16.516 3C19.964 3 22 4.985 22 8.382h-4.231v.034c-1.964 0-3.556 1.552-3.556 3.467s1.592 3.467 3.556 3.467H22v.312C22 19.015 19.964 21 16.516 21H7.484C4.036 21 2 19.015 2 15.662V8.338C2 4.985 4.036 3 7.484 3h9.032zm4.737 6.872c.413 0 .747.326.747.728v2.531a.746.746 0 01-.747.728H17.85c-.994.013-1.864-.65-2.089-1.595a1.982 1.982 0 01.433-1.652 2.091 2.091 0 011.576-.74h3.484zm-3.004 1.17h-.329a.766.766 0 00-.54.213.728.728 0 00-.224.524c0 .413.34.75.764.754h.329a.755.755 0 00.764-.745.755.755 0 00-.764-.746zm-5.867-4.15H6.738a.755.755 0 00-.765.736c0 .413.341.75.765.754h5.644a.755.755 0 00.765-.745.755.755 0 00-.765-.746z"
        fill="#55405D"
      />
    </Svg>
  )
}

export default Wallet