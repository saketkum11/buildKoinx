/* eslint-disable react-refresh/only-export-components */
// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";

// eslint-disable-next-line react-refresh/only-export-components
// TradingViewWidget.jsx
function TradingViewWidget() {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
            "autosize": true,
            "symbol": "BITSTAMP:BTCUSD",
            "timezone": "Etc/UTC",
            "theme": "light",
            "style": "1",
            "locale": "en",
            "enable_publishing": true,
            "range": "YTD",
            "hide_side_toolbar": false,
            "allow_symbol_change": true,
            "details": true,
            "hotlist": true,
            "calendar": false,
            "show_popup_button": true,
            "popup_width": "1000",
            "popup_height": "650",
          "support_host": "https://www.tradingview.com"
        }`;
    container.current.appendChild(script);
  }, []);

  return <div className="w-full h-full" ref={container}></div>;
}

export default memo(TradingViewWidget);
