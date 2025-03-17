import { Button } from '@radix-ui/themes'
import { BookOpen } from 'lucide-react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth.ts'
import * as styles from './Layout.css.ts'

const Layout = () => {
  const { user } = useAuth()

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <Link className={styles.logo} to='/'>
            <BookOpen className={styles.logoIcon} />
            <span className={styles.logoText}>Yomasete</span>
          </Link>
          <nav className={styles.nav}>
            <Link className={styles.navLink} to='#features'>
              特徴
            </Link>
            <Link className={styles.navLink} to='#how-it-works'>
              使い方
            </Link>
            <Link className={styles.navLink} to='#pricing'>
              料金プラン
            </Link>
          </nav>
          {!user && (
            <div className={styles.authButtons}>
              <Link to='/signin'>
                <Button variant='outline'>ログイン</Button>
              </Link>
              <Link to='/signup'>
                <Button>新規登録</Button>
              </Link>
            </div>
          )}
        </div>
      </header>

      <Outlet />

      <footer className={styles.footer}>
        <div className={styles.footerContainer}>
          <div className={styles.footerLeft}>
            <BookOpen className={styles.footerIcon} />
            <p className={styles.footerText}>© 2025 Yomasete. All rights reserved.</p>
          </div>
          <nav className={styles.footerNav}>
            <Link className={styles.footerNavLink} to='#'>
              利用規約
            </Link>
            <Link className={styles.footerNavLink} to='#'>
              プライバシーポリシー
            </Link>
            <Link className={styles.footerNavLink} to='#'>
              お問い合わせ
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}

export default Layout
