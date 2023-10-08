import "./globals.css";
import localFont from "next/font/local";
import ContextState from "../../context/context";
const IBM_Plex_Sans = localFont({
  src: [
    {
      path: "../../public/Fonts/IBMPlexSans-Bold.ttf",
      weight: "900",
      style: "bold",
    },
    {
      path: "../../public/Fonts/IBMPlexSans-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/Fonts/IBMPlexSans-Regular.ttf",
      weight: "500",
      style: "normal",
    },
  ],
});

export const metadata = {
  title: "Coffe close to you ",
  description:
    "this web site give you multiplication options of the close Coffee to you ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={IBM_Plex_Sans.className}>
        <ContextState>{children}</ContextState>
      </body>
    </html>
  );
}
