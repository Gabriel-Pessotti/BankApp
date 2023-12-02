import * as React from "react"
import Svg, {
  Rect,
  Mask,
  G,
  Ellipse,
  Defs,
  LinearGradient,
  Stop
} from "react-native-svg"

function CardSvg(props) {
  return (
    <Svg
      width={360}
      height={270}
      viewBox="7 0 357 263"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Rect x={9.98584} width={346.458} height={239} rx={16} fill="#000000" />
      <Mask
        id="a"
        style={{
          maskType: "alpha"
        }}
        maskUnits="userSpaceOnUse"
        x={9}
        y={0}
        width={348}
        height={239}
      >
        <Rect x={9.98584} width={346.458} height={239} rx={16} fill="#ffffff" />
      </Mask>
      <G mask="url(#a)" fillOpacity={0.2}>
        <Ellipse
          cx={109.114}
          cy={188.5}
          rx={231.809}
          ry={138.5}
          fill="url(#paint0_linear_1_777)"
        />
        <Ellipse
          cx={109.114}
          cy={188.5}
          rx={128.039}
          ry={76.5}
          fill="url(#paint1_linear_1_777)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_1_777"
          x1={331.717}
          y1={52.5}
          x2={210.143}
          y2={242.262}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEFEFE" />
          <Stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_1_777"
          x1={237.153}
          y1={120.5}
          x2={178.923}
          y2={208.678}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FEFEFE" />
          <Stop offset={1} stopColor="#FEFEFE" stopOpacity={0} />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default CardSvg
