(function () {
    'use strict';

    // Run immediately when script loads
    function initLinkzRedirect() {
        const ua = navigator.userAgent.toLowerCase();
        const isIG = ua.includes("instagram");
        const isFB = ua.includes("fbav") || ua.includes("fban") || ua.includes("facebook");
        const isTikTok = ua.includes("tiktok") || ua.includes("bytedance") || ua.includes("musical_ly");

        if (isIG || isFB || isTikTok) {
            const url = window.location.href;
            const fullPath = location.host + location.pathname + location.search + location.hash;
            // ANDROID - Open in Chrome outside InAppBrowser
            if (ua.includes("android")) {
                window.location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
                return;
            }

            // iOS - Try to open outside WebView
            window.location.href = `x-safari-${url}`;
            window.open(`x-safari-${url}`, "_blank");
        }
    }
    initLinkzRedirect();
})();