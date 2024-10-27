import { logout } from "./actions";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="p-8">
          <button onClick={logout}>Logout</button>
        </div>
        {children}
      </body>
    </html>
  );
}
