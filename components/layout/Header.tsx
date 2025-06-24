import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
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
            <Link className="login-link" href="/login">
              Login
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}