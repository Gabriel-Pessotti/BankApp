import * as React from "react"
import Svg, { Path } from "react-native-svg"
function Users(props) {
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
        d="M11.949 14.54c3.431 0 6.361.544 6.361 2.72S15.399 20 11.949 20c-3.431 0-6.36-.544-6.36-2.72 0-2.177 2.91-2.74 6.36-2.74zm5.486-1.311c1.312-.024 2.722.156 3.243.284 1.104.217 1.83.66 2.131 1.304a1.923 1.923 0 010 1.67c-.46.998-1.944 1.319-2.52 1.402-.12.018-.215-.086-.203-.206.295-2.767-2.048-4.08-2.654-4.381-.026-.014-.032-.034-.03-.047.003-.009.013-.023.033-.026zM6.32 13.227l.247.002c.02.003.03.017.03.026.004.013-.002.033-.027.047-.607.302-2.95 1.614-2.656 4.38.013.121-.082.224-.201.207-.577-.083-2.06-.404-2.52-1.402a1.917 1.917 0 010-1.67c.3-.644 1.026-1.087 2.13-1.305.522-.127 1.93-.307 3.244-.283l-.247-.002zM11.949 4a4.206 4.206 0 014.21 4.233 4.207 4.207 0 01-4.21 4.234 4.207 4.207 0 01-4.21-4.234A4.206 4.206 0 0111.95 4zm5.714.706c2.257 0 4.029 2.135 3.425 4.514-.407 1.601-1.882 2.665-3.525 2.621a3.4 3.4 0 01-.483-.046.158.158 0 01-.107-.245 5.765 5.765 0 00.984-3.24c0-1.25-.39-2.416-1.068-3.372-.022-.03-.038-.075-.016-.11.018-.028.05-.042.082-.05.229-.046.463-.072.708-.072zm-11.327 0c.245 0 .48.026.71.073.03.007.064.022.081.05.021.034.006.08-.016.11a5.807 5.807 0 00-1.068 3.37c0 1.198.357 2.314.984 3.241a.158.158 0 01-.106.244 3.284 3.284 0 01-.484.047c-1.643.043-3.118-1.02-3.525-2.621C2.308 6.84 4.08 4.706 6.336 4.706z"
        fill="#55405D"
      />
    </Svg>
  )
}

export default Users
