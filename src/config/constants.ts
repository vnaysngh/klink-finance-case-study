import Binance from "@/assets/logos/binance.png";
import Wirex from "@/assets/logos/wirex.png";
import CryptoDotCom from "@/assets/logos/cryptodotcom.png";
import Revolut from "@/assets/logos/revolut.png";
import Nexo from "@/assets/logos/nexo.png";
import Castrum from "@/assets/logos/castrum.png";
import Signum from "@/assets/logos/signum.svg";
import Blockchain from "@/assets/logos/blockchain.png";
import MasterVentures from "@/assets/logos/masterventures.svg";
import Coindesk from "@/assets/logos/coindesk.svg";
import Cointelegraph from "@/assets/logos/cointelegraph.png";
import CoinMarketCap from "@/assets/logos/coinmarket.png";
import Cointrust from "@/assets/logos/cointrust.png";
import Person1 from "@/assets/footer/image-1.svg";
import Person2 from "@/assets/footer/image-2.svg";
import Person3 from "@/assets/footer/image-3.svg";
import Person4 from "@/assets/footer/image-4.svg";
import Person5 from "@/assets/footer/image-5.svg";
import Person6 from "@/assets/footer/image-6.svg";
import Twitter from "@/assets/socials/twitter.png";
import Discord from "@/assets/socials/discord.png";
import Telegram from "@/assets/socials/telegram.png";
import Link3 from "@/assets/socials/link3.png";

//crypto logos
import Ethereum from "@/assets/logos/ethereum.png";
import Base from "@/assets/logos/base.png";
import Optimism from "@/assets/logos/optimism.png";
import { StaticImageData } from "next/image";

export const networkLogos: Record<number, StaticImageData> = {
  1: Ethereum,
  8453: Base,
  10: Optimism,
};

export const CONTRACT_ADDRESS = "0xdc5eb0fc6d3f64689290595ebe8943155ed4a73a";

export const partners = [
  { icon: Binance, name: "Binance" },
  { icon: Wirex, name: "Wirex" },
  { icon: CryptoDotCom, name: "Crypto.com" },
  { icon: Revolut, name: "Revolut" },
  { icon: Nexo, name: "Nexo" },
];

export const investors = [
  { name: "CASTRUM CAPITAL", logo: Castrum },
  {
    name: "BLOCKCHAIN FOUNDERS FUND",
    logo: Blockchain,
  },
  { name: "SIGNUM CAPITAL", logo: Signum },
  { name: "MASTER VENTURES", logo: MasterVentures },
  { name: "CASTRUM CAPITAL", logo: Castrum },
  {
    name: "BLOCKCHAIN FOUNDERS FUND",
    logo: Blockchain,
  },
  { name: "SIGNUM CAPITAL", logo: Signum },
  { name: "MASTER VENTURES", logo: MasterVentures },
];

export const mediaPartners = [
  { name: "Coindesk", logo: Coindesk, readUrl: "#" },
  { name: "CoinTelegraph", logo: Cointelegraph, readUrl: "#" },
  { name: "CoinMarketCap", logo: CoinMarketCap, readUrl: "#" },
];

export const testimonials = [
  {
    logo: CoinMarketCap,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
    readUrl: "#",
  },
  {
    logo: Cointrust,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
    readUrl: "#",
  },
  {
    logo: CoinMarketCap,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
    readUrl: "#",
  },
  {
    logo: Cointrust,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, @Klinkfinance sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ncididunt ut labore et dolore magnaaliqua. ncididunt ut labore et dolore magna.",
    readUrl: "#",
  },
];

export const resources = [
  {
    name: "Default Image",
    link: "#",
    image: Person1,
  },
  {
    name: "Buy $SLINK",
    link: "#",
    image: Person2,
  },
  {
    name: "Stake $KLINK",
    link: "#",
    image: Person3,
  },
  {
    name: "KLINK Docs",
    link: "#",
    image: Person4,
  },
  {
    name: "Media Kit",
    link: "#",
    image: Person5,
  },
  {
    name: "Link3",
    link: "#",
    image: Person6,
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    url: "https://x.com/klinkfinance",
    img: Twitter,
    followers: "250k",
  },
  {
    name: "Discord",
    url: "https://discord.gg/klinkfinance",
    img: Discord,
    followers: "100k",
  },
  {
    name: "Telegram",
    url: "https://t.me/klinkfinance",
    img: Telegram,
    followers: "350k",
  },
  {
    name: "Link3",
    url: "https://link3.to/klinkfinance",
    img: Link3,
  },
];
