'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useSession } from "next-auth/react";
import LogoutButton from '../ui/LogoutButton';
export default function Header() {
  const { data: session, status } = useSession();
  return (
    <header>
      <Image
        src="/logo_smartscience.svg"
        alt="Logotipo do SmartScience"
        width={40}
        height={40}
      />
      <h1>SmartScience</h1>
      <nav>
        <ul>
          <li>
            {!session ? (
              <Link className="login-link" href="/login">
                Login
              </Link>
            ) : (
              <>
                 <LogoutButton/>
              </>
            )}
          {session?.user?.role === 'admin' && (
            <>
              <Link className="login-link" href="/dashboard">
                Dashboard 
              </Link>
            </>
          )}  
          </li>
        </ul>
      </nav>
    </header>
  );
}