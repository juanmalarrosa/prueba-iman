/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from "react"

const injectPrismaScriptHtml = `
(function(){
  var isPreviewPage = window.location.pathname.split('/').indexOf('preview') >= 0;
  var hasPrismicCookie = document.cookie.indexOf('prismic.preview') >= 0;
  if (isPreviewPage || hasPrismicCookie) {
    var script = document.createElement('script');
    script.src = '//static.cdn.prismic.io/prismic.min.js';
    script.type = 'text/javascript';
    document.body.appendChild(script);
  }
})();
`

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{
        __html: injectPrismaScriptHtml,
      }}
    />,
  ])
}
