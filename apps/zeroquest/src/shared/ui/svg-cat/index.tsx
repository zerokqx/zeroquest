export const UndefinedSvgCat = ()=>{
  return (
<svg width="360" height="260" viewBox="0 0 360 260" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Милый кот для пустого состояния">
  <defs>
    <linearGradient id="bg" x1="70" y1="40" x2="290" y2="220" gradientUnits="userSpaceOnUse">
      <stop stop-color="#F8FAFD"/>
      <stop offset="1" stop-color="#EDF2F8"/>
    </linearGradient>

    <linearGradient id="fur" x1="118" y1="72" x2="234" y2="205" gradientUnits="userSpaceOnUse">
      <stop stop-color="#D8DEE8"/>
      <stop offset="1" stop-color="#B7C0CF"/>
    </linearGradient>

    <linearGradient id="furSoft" x1="145" y1="120" x2="200" y2="190" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FAFCFE"/>
      <stop offset="1" stop-color="#EEF3F8"/>
    </linearGradient>

    <linearGradient id="earPink" x1="0" y1="0" x2="1" y2="1">
      <stop stop-color="#F8D7E1"/>
      <stop offset="1" stop-color="#EDB9C9"/>
    </linearGradient>

    <filter id="shadow" x="82" y="54" width="194" height="168" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="8"/>
      <feGaussianBlur stdDeviation="8"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0 0.28 0 0 0 0.12 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1" result="shape"/>
    </filter>
  </defs>

  <path d="M86.737 58.896C114.906 38.473 157.529 33.108 198.121 39.174C234.506 44.61 272.654 58.583 283.79 90.805C295.027 123.317 272.836 157.886 245.184 180.547C220.49 200.782 188.278 216.481 154.937 211.807C121.173 207.074 90.798 186.972 74.875 157.956C58.367 127.874 57.642 79.991 86.737 58.896Z" fill="url(#bg)"/>

  <circle cx="82" cy="92" r="4.5" fill="#DCE4EF"/>
  <circle cx="273" cy="76" r="5" fill="#DCE4EF"/>
  <circle cx="289" cy="137" r="3.5" fill="#DCE4EF"/>
  <circle cx="101" cy="61" r="2.5" fill="#E6ECF5"/>

  <g filter="url(#shadow)">
    <path d="M223 165C239 160 251 165 256 174C261 183 257 194 248 198C238 202 228 198 225 191C223 186 225 181 231 179C236 177 241 179 244 183"
      stroke="#A9B3C2" stroke-width="12" stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M112 159C112 131.386 133.49 111 160 111C186.51 111 208 131.386 208 159C208 171.118 203.9 181.459 197.217 188.923C190.885 195.995 182.053 200 172.5 200H147.5C137.947 200 129.115 195.995 122.783 188.923C116.1 181.459 112 171.118 112 159Z" fill="url(#fur)"/>

    <path d="M118 172C115 177 113 182 114.5 186.5C117 194.5 125 198 132 198" stroke="#AEB7C6" stroke-width="5" stroke-linecap="round"/>
    <path d="M202 172C205 177 207 182 205.5 186.5C203 194.5 195 198 188 198" stroke="#AEB7C6" stroke-width="5" stroke-linecap="round"/>

    <ellipse cx="160" cy="165" rx="28" ry="24" fill="url(#furSoft)"/>

    <path d="M145 130C149 138 156 142 160 142C164 142 171 138 175 130C171 132 168 133 165 133C163 133 161 132.5 160 131.5C159 132.5 157 133 155 133C152 133 149 132 145 130Z" fill="#F8FBFE"/>
    <g>
      <ellipse cx="143" cy="198" rx="13" ry="8" fill="#98A2B2"/>
      <ellipse cx="177" cy="198" rx="13" ry="8" fill="#98A2B2"/>
      <ellipse cx="143" cy="198" rx="6.3" ry="3.8" fill="#C8CFDA"/>
      <ellipse cx="177" cy="198" rx="6.3" ry="3.8" fill="#C8CFDA"/>
    </g>

    <circle cx="160" cy="103" r="39" fill="url(#fur)"/>

    <path d="M131 80C130 68 133 58 141 49C149 56 153 68 152 80H131Z" fill="#BDC6D4"/>
    <path d="M189 80C190 68 187 58 179 49C171 56 167 68 168 80H189Z" fill="#BDC6D4"/>

    <path d="M137 77C137 68 139 61 144 55C148 60 150 68 149 77H137Z" fill="url(#earPink)"/>
    <path d="M183 77C183 68 181 61 176 55C172 60 170 68 171 77H183Z" fill="url(#earPink)"/>

    <ellipse cx="132" cy="117" rx="9" ry="6" fill="#EDF1F7"/>
    <ellipse cx="188" cy="117" rx="9" ry="6" fill="#EDF1F7"/>

    <ellipse cx="146.5" cy="105.5" rx="4.8" ry="6.3" fill="#49515E"/>
    <ellipse cx="173.5" cy="105.5" rx="4.8" ry="6.3" fill="#49515E"/>
    <circle cx="148" cy="103.5" r="1.1" fill="white"/>
    <circle cx="175" cy="103.5" r="1.1" fill="white"/>

    <path d="M139 96C142.5 94.5 146 94 150 94" stroke="#5A6270" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M170 94C174 94 177.5 94.5 181 96" stroke="#5A6270" stroke-width="2.5" stroke-linecap="round"/>

    <path d="M160 114C157.6 114 155.5 115.8 154.9 118L160 121L165.1 118C164.5 115.8 162.4 114 160 114Z" fill="#E89CAB"/>

    <path d="M160 121V126" stroke="#697282" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M160 126C157.8 128.8 154.6 130.2 150.5 129.5" stroke="#697282" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M160 126C162.2 128.8 165.4 130.2 169.5 129.5" stroke="#697282" stroke-width="2.6" stroke-linecap="round"/>

    <path d="M128 113C133 113 138 112.5 143 111" stroke="#7D8696" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M127 121C132 120.5 137.5 120.5 143 121" stroke="#7D8696" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M192 113C187 113 182 112.5 177 111" stroke="#7D8696" stroke-width="2.1" stroke-linecap="round"/>
    <path d="M193 121C188 120.5 182.5 120.5 177 121" stroke="#7D8696" stroke-width="2.1" stroke-linecap="round"/>

    <path d="M147 81C150 85 154 87 160 87C166 87 170 85 173 81" stroke="#EFF4FA" stroke-width="4" stroke-linecap="round"/>

    <g opacity="0.95">
      <rect x="103" y="176" width="27" height="20" rx="5" fill="#F4F7FB" stroke="#CDD6E3" stroke-width="2"/>
      <path d="M103 182.5H130" stroke="#CDD6E3" stroke-width="2"/>
      <path d="M110 170L116.5 176" stroke="#CDD6E3" stroke-width="2" stroke-linecap="round"/>
      <path d="M123 170L116.5 176" stroke="#CDD6E3" stroke-width="2" stroke-linecap="round"/>
    </g>
  </g>
</svg>
  )
}
export {ErrorCatSvg} from "./error-cat"
