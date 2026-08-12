import { NextResponse } from "next/server";

const FEE_RATE = 0.065;

// قیمت موقت برای توسعه
// بعداً این قسمت به منبع قیمت واقعی متصل می‌شود.
const MARKET_PRICES = {
  USDT: 100000,
  BTC: 10000000000,
  ETH: 350000000,
};

export async function GET() {
  const prices = Object.entries(MARKET_PRICES).map(
    ([symbol, marketPrice]) => {
      const buyPrice = marketPrice * (1 + FEE_RATE);
      const sellPrice = marketPrice * (1 - FEE_RATE);

      return {
        symbol,
        marketPrice,
        feeRate: FEE_RATE,
        buyPrice,
        sellPrice,
        updatedAt: new Date().toISOString(),
      };
    }
  );

  return NextResponse.json({
    success: true,
    prices,
  });
}
