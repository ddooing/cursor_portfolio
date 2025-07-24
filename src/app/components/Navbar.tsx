import Link from 'next/link';

const Navbar = () => {
  return (
    <nav style={{
      padding: '1rem',
      backgroundColor: '#fff',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        <Link href="/" style={{
          fontSize: '1.5rem',
          fontWeight: 'bold',
          color: '#333',
          textDecoration: 'none'
        }}>
          김도영
        </Link>
        <div style={{
          display: 'flex',
          gap: '2rem'
        }}>
          <Link href="/" style={{
            color: '#666',
            textDecoration: 'none'
          }}>Home</Link>
          <Link href="/about" style={{
            color: '#666',
            textDecoration: 'none'
          }}>About</Link>
          <Link href="/projects" style={{
            color: '#666',
            textDecoration: 'none'
          }}>Projects</Link>
          <Link href="/contact" style={{
            color: '#666',
            textDecoration: 'none'
          }}>Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;