import "./globals.css";
import { profile } from "@/data/site";

export const metadata = {
  title: `${profile.name} | ${profile.title}`,
  description: profile.intro,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
