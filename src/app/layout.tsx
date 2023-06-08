import "./globals.css";
import localFont from "next/font/local";
import "@catppuccin/tailwindcss";

const gilroy = localFont({
  src: [
    {
      path: "../../public/Fonts/Gilroy-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Gilroy-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/Fonts/Gilroy-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-gilroy",
});

const helv = localFont({
  src: [
    {
      path: "../../public/Fonts/HelveticaNowText-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/Fonts/HelveticaNowText-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-helv",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${gilroy.variable} ${helv.variable} theme-macchiato bg-ctp-base`}>
        {children}
      </body>
    </html>
  );
}
