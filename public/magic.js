(function () {
    'use strict';
    const ua = navigator.userAgent.toLowerCase();
    if (!ua.includes("instagram") &&
        !ua.includes("fbav") &&
        !ua.includes("fban") &&
        !ua.includes("facebook") &&
        !ua.includes("tiktok") &&
        !ua.includes("bytedance") &&
        !ua.includes("musical_ly")) {
        return; // Exit immediately if not in-app
    }
    const host = location.host;
    const pathname = location.pathname;
    const search = location.search;
    const hash = location.hash;
    const href = location.href;
    const isAndroid = ua.includes("android");
    const fullPath = host + pathname + search + hash;
    if (isAndroid) {
        location.href = `intent://${fullPath}#Intent;scheme=https;package=com.android.chrome;end`;
    } else {
        location.href = `x-safari-${href}`;
    }
})();