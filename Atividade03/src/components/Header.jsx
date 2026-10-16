import React, { useState } from 'react'

const links = [
    { label: 'Filmes', href: '/' },
    { label: 'Categoria', href: '/' },
    { label: 'Sobre', href: '/' },
    { label: 'Contato', href: '/' },
]

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const closeMenu = () => setMenuOpen(false)

    return (
        <header className="header">
            <a className="logo" href="/" onClick={closeMenu}>
                MovieCity
            </a>

            <nav
                id="primary-navigation"
                className={`navigation ${menuOpen ? 'open' : ''}`}
                aria-label="Navegação principal"
            >
                {links.map((link) => (
                    <a key={link.label} href={link.href} onClick={closeMenu}>
                        {link.label}
                    </a>
                ))}
            </nav>

            <div className="header-actions">
                <a className="login-link" href="/login" onClick={closeMenu}>
                    Login
                </a>
                <button
                    className={`menu-button ${menuOpen ? 'open' : ''}`}
                    type="button"
                    aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                    aria-expanded={menuOpen}
                    aria-controls="primary-navigation"
                    onClick={() => setMenuOpen((prev) => !prev)}
                >
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                    <span aria-hidden="true" />
                </button>
            </div>
        </header>
    )
}

export default Header
