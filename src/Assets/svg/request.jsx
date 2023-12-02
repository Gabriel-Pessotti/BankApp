import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function Request(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 1.25a.75.75 0 00-.75.75v10.973l-1.68-1.961a.75.75 0 10-1.14.976l3 3.5a.75.75 0 001.14 0l3-3.5a.75.75 0 10-1.14-.976l-1.68 1.96V2a.75.75 0 00-.75-.75z"
        fill="#55405D"
      />
      <Path
        d="M14.25 9v.378a2.249 2.249 0 012.458 3.586l-3 3.5a2.25 2.25 0 01-3.416 0l-3-3.5A2.25 2.25 0 019.75 9.378V9H8c-2.828 0-4.243 0-5.121.879C2 10.757 2 12.172 2 15v1c0 2.828 0 4.243.879 5.121C3.757 22 5.172 22 8 22h8c2.828 0 4.243 0 5.121-.879C22 20.243 22 18.828 22 16v-1c0-2.828 0-4.243-.879-5.121C20.243 9 18.828 9 16 9h-1.75z"
        fill="#55405D"
      />
    </Svg>
  );
}

export default Request;
