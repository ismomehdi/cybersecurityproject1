import { cookies as getCookies } from "next/headers";
import { logout } from "./actions";
import "./globals.css";

export default async function RootLayout({ children }) {
  const cookies = await getCookies();
  const isLoggedIn = cookies.get("pb_auth");

  return (
    <html lang="en">
      <body>
        <div className="p-8">
          {isLoggedIn && <button onClick={logout}>Logout</button>}
        </div>
        {children}
      </body>
    </html>
  );
}
