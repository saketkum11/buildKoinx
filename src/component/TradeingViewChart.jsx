/* eslint-disable react-refresh/only-export-components */
// TradingViewWidget.jsx
import { useEffect, useRef, memo } from "react";
import { Link } from "react-router-dom";

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

  return (
    <div className="tradingview-widget-container w-full " ref={container}>
      <div
        className="tradingview-widget-container__widget "
        style={{ height: "calc(100% - 32px)", width: "100%" }}
      ></div>
      <div className="tradingview-widget-copyright">
        <Link to="https://www.tradingview.com/">
          <span className="blue-text">Track all markets on TradingView</span>
        </Link>
      </div>
    </div>
  );
}

export default memo(TradingViewWidget);
