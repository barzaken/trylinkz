/**
 * LinkzMagic.js - In-App Browser Detection & Redirect
 * Detects when users are in social media in-app browsers and redirects them to their default browser
 * Usage: Add <script src="path/to/linkzmagic.js"></script> in your <head> tag
 */

(function() {
    'use strict';
  
    const appNameRegExps = {
      messenger: {
        regex: /(\bFB[\w_]+\/(Messenger))|(^(?!.*\buseragents)(?!.*\bIABMV).*(FB_IAB|FBAN).*)/i,
        name: "Facebook Messenger",
      },
      instagram: {
        regex: /\bInstagram/i,
        name: "Instagram",
      },
      facebook: {
        regex: /\bFB[\w_]+\/|\bFacebook/i,
        name: "Facebook",
      },
      twitter: {
        regex: /\bTwitter/i,
        name: "Twitter",
      },
      threads: {
        regex: /\bBarcelona/i,
        name: "Threads",
      },
      tiktok: {
        regex: /musical_ly|Bytedance/i,
        name: "TikTok",
      },
      snapchat: {
        regex: /Snapchat/i,
        name: "Snapchat",
      },
      linkedin: {
        regex: /LinkedInApp/i,
        name: "LinkedIn",
      },
      gsa: {
        regex: /GSA/i,
        name: "Google Search App",
      },
      whatsapp: {
        regex: /\b(WAiOS|WA4A)\//i,
        name: "WhatsApp",
      }
    };
  
    const appKeysDetectByUA = Object.keys(appNameRegExps);
  
    function getAppKey(ua) {
      return appKeysDetectByUA.find(function(appName) {
        return appNameRegExps[appName].regex.test(ua);
      });
    }
  
    function handleInAppRedirect() {
      const ua = navigator.userAgent.toLowerCase();
      const isInApp = getAppKey(ua);
      
      if (isInApp) {
        const url = window.location.href;
        
        // Special handling for deeplinkz.io/www URLs
        if (url.startsWith("https://deeplinkz.io/www")) {
          const fullPath = window.location.pathname.slice(1) + window.location.search + window.location.hash;
          
          if (ua.includes("android")) {
            window.location.href = "intent://" + fullPath + "#Intent;scheme=https;package=com.android.chrome;end";
            return;
          }
          
          window.location.href = "x-safari-https://" + fullPath;
          window.open("x-safari-https://" + fullPath, "_blank");
          return;
        }
  
        // Standard handling for all other URLs
        const fullPath = location.host + location.pathname + location.search + location.hash;
        
        if (ua.includes("android")) {
          window.location.href = "intent://" + fullPath + "#Intent;scheme=https;package=com.android.chrome;end";
          return;
        }
        
        window.location.href = "x-safari-" + url;
        window.open("x-safari-" + url, "_blank");
      }
    }
  
    // Run immediately when script loads
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', handleInAppRedirect);
    } else {
      handleInAppRedirect();
    }
  })();