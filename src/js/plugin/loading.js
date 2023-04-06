/** loading.js ****************************************************************************************************** */
const PLUGIN_NAME = 'loading'
let loading = null

Object.assign(Window.prototype, {
  loading (isLoading = true) {
    loading = loading || new Loading()
    loading.loading(isLoading)

    return loading
  }
})

export default class Loading {
  constructor () {
    let _loadingHtml = `<div class="loading-wrap" style="display: none">
      <!--: Start #contents -->
      <svg class="loading" width="46" height="46">
        <defs>
          <filter x="-11.8%" y="-11.7%" width="123.5%" height="123.5%" filterUnits="objectBoundingBox" id="b">
            <feMorphology radius=".2" operator="dilate" in="SourceAlpha" result="shadowSpreadOuter1"/>
            <feOffset in="shadowSpreadOuter1" result="shadowOffsetOuter1"/>
            <feGaussianBlur stdDeviation="1.5" in="shadowOffsetOuter1" result="shadowBlurOuter1"/>
            <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out" result="shadowBlurOuter1"/>
            <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.24 0" in="shadowBlurOuter1"/>
          </filter>
          <path d="M20 0c11.046 0 20 8.954 20 20s-8.954 20-20 20S0 31.046 0 20 8.954 0 20 0zm0 8C13.373 8 8 13.373 8 20s5.373 12 12 12 12-5.373 12-12S26.627 8 20 8z" id="a"/>
        </defs>
        <g transform="translate(3 3)" fill="none" fill-rule="evenodd">
          <mask id="c" fill="#fff"><use xlink:href="#a"/></mask>
          <use fill="#000" filter="url(#b)" xlink:href="#a"/>
          <path stroke-opacity=".24" stroke="#000" stroke-width=".2" d="M20-.1c5.55 0 10.575 2.25 14.213 5.887A20.037 20.037 0 0140.1 20c0 5.55-2.25 10.575-5.887 14.213A20.037 20.037 0 0120 40.1c-5.55 0-10.575-2.25-14.213-5.887A20.037 20.037 0 01-.1 20c0-5.55 2.25-10.575 5.887-14.213A20.037 20.037 0 0120-.1zm0 8.2a11.863 11.863 0 00-8.415 3.485A11.863 11.863 0 008.1 20c0 3.286 1.332 6.261 3.485 8.415A11.863 11.863 0 0020 31.9c3.286 0 6.261-1.332 8.415-3.485A11.863 11.863 0 0031.9 20c0-3.286-1.332-6.261-3.485-8.415A11.863 11.863 0 0020 8.1z"/>
          <image mask="url(#c)" width="40" height="40" xlink:href="data:image/png;base64,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"/>
        </g>
      </svg>
      <!--: End #contents -->
    </div>`

    document.body.insertAdjacentHTML('beforeend', _loadingHtml)
    this.$loading = document.querySelector('.loading-wrap')
  }

  loading (isLoading) {
    this.$loading.style.display = isLoading ? 'block' : 'none'
    blockScroll(isLoading ? 'block' : 'scroll')

    return this.$loading
  }
}
/** ***************************************************************************************************************** */
